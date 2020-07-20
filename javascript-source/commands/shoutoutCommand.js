/*
 * Copyright (C) 2016-2020 phantombot.tv
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

/**
 * This module is to handle shoutout commands for normal shoutouts (so), team/clan members shoutouts ([x]so) and super shoutouts (sso).
 * The module replaces the shoutout functionality previously found in the follower handler.
 * @author: MzLiv
 */

(function() {
    var soToggle = $.getSetIniDbBoolean('shoutoutSettings', 'soToggle', false),
        ssoToggle = $.getSetIniDbBoolean('shoutoutSettings', 'ssoToggle', false),
        ssoSpam = $.getSetIniDbNumber('shoutoutSettings', 'ssoSpam', 5),
        teamSOToggle = $.getSetIniDbBoolean('shoutoutSettings', 'teamSOToggle', false);


    /*
     * @function updateShoutoutCommandConfig
     */
    function updateShoutoutCommandConfig() {
        soToggle = $.getIniDbBoolean('settings', 'soToggle', false);
        ssoToggle = $.getIniDbBoolean('settings', 'ssoToggle', false);
        ssoSpam = $.getIniDbNumber('shoutoutSettings', 'ssoSpam', 5);
        xsoToggle = $.getIniDbBoolean('settings', 'xsoToggle', false);
        xsoName = $.getIniDbString('shoutoutSettings', 'xsoName', 'x');
        ysoToggle = $.getIniDbBoolean('settings', 'ysoToggle', false);
        ysoName = $.getIniDbString('shoutoutSettings', 'ysoName', 'y');
        zsoToggle = $.getIniDbBoolean('settings', 'zsoToggle', false);
        zsoName = $.getIniDbString('shoutoutSettings', 'zsoName', 'z');
    }

    /*
     * @function doTeamSo team shoutout
     */
    function doTeamSo(streamer) {
        if ($.isOnline(user)) {
            $.say($.lang.get('shoutoutcommand.teamso.online', ))
        }
        else {
            $.say($.lang.get('shoutoutcommand.teamso.offline', ))
        }
    }

    /*
     * @event command
     */
    $.bind('command', function(event) {
        var sender = event.getSender(),
            command = event.getCommand(),
            args = event.getArgs(),
            streamer = $.user.sanitize(args[0]),
            streamerDisplay = $.username.resolve(streamer),
            streamerGame = $.getGame(streamer),
            streamerURL = 'https://twitch.tv/' + streamer;

        /*
         * @commandpath so [streamer] - Give a shoutout to a streamer.
         */

        if (command.equalsIgnoreCase('so')) {
            if (action === undefined) {
                $.say($.lang.get('shoutoutcommand.usage', 'so'));
                return;
            }

            if (streamerGame == null || streamerGame.length === 0) {
                $.say($.lang.get('followhandler.shoutout.no.game', streamerDisplay, streamerURL));
                return;
            }

            if (!$.isOnline(streamer)) {
                $.say($.lang.get('shoutoutcommand.offline', streamerDisplay, streamerURL, streamerGame));
            } else {
                $.say($.lang.get('shoutoutcommand.online', streamerDisplay, streamerURL, streamerGame));
            }
        }

        /*
         * @commandpath sso [streamer] - Give a super shoutout to a streamer.
         */
        if (command.equalsIgnoreCase('sso')) {
            if (action === undefined) {
                $.say($.lang.get('shoutoutcommand.usage', 'sso'));
                return;
            }

            if (streamerGame == null || streamerGame.length === 0) {
                $.say($.lang.get('followhandler.shoutout.no.game', streamerDisplay, streamerURL));
                for (var i = 0; i < ssoSpam; i++) {
                    $.say(streamerURL);
                    pause(0.5)
                }
                return;
            }

            if (!$.isOnline(streamer)) {
                $.say($.lang.get('shoutoutcommand.offline', streamerDisplay, streamerURL, streamerGame));
                for (i = 0; i < ssoSpam; i++) {
                    $.say(streamerURL);
                    pause(0.5)
                }
            } else {
                $.say($.lang.get('shoutoutcommand.online', streamerDisplay, streamerURL, streamerGame));
                for (i = 0; i < ssoSpam; i++) {
                    $.say(streamerURL);
                    pause(0.5)
                }
            }
        }
    })

    /*
     * @event ircChannelJoin
     */
    $.bind('ircChannelJoin', function(event) {
        var streamer = event.getUser().toLowerCase(),
            streamerDisplay = $.resolveRank(streamer),
            lastUserSo = $.getIniDbNumber('greetingCoolDown', user, 0),
            now = $.systemTime();
        /*
         * automatic shoutouts for team members
         */
        if ($.twitchteamscache.hasuser(streamer) === true && teamSOToggle === true){
            doTeamSo(streamerDisplay);
            return;
        }

    });

    /*
     * @event initReady
     */
    $.bind('initReady', function () {
        $.registerChatCommand('./commands/shoutoutCommand.js', 'so', 2);
        $.registerChatCommand('./commands/shoutoutCommand.js', 'sso', 2);
    });

})();


