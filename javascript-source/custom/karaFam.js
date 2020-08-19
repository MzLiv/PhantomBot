/*
 * Copyright (C) 2016-2020 phantom.bot
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
 * This module is for the custom elements for the Team Ahamkara bot KaraFam
 * @author: MzLiv
 */

(function () {
    var
        numberOfNotices = (parseInt($.inidb.GetKeyList('notices', '').length) ? parseInt($.inidb.GetKeyList('notices', '').length) : 0),
        numberOfCommands = (parseInt($.inidb.GetKeyList('command', '').length) ? parseInt($.inidb.GetKeyList('command', '').length) : 0),
        numberOfMembers = (parseInt($.inidb.GetKeyList('members', '').length) ? parseInt($.inidb.GetKeyList('members', '').length) : 0);

    // Add team member
    function addMember(twitchName, twitterName){
        $.setIniDbString('karaFam', twitchName, twitterName);
        numberOfMembers++;
        return;
    }

    // Remove team member
    function removeMember(twitchName, twitterName){
        $.inidb.del('karaFam', twitchName + twitterName);
        numberOfMembers--;
        return;
    }

    // Remove non-core timers
    function removeTimers(){
        while (numberOfNotices > 4){
            $.inidb.del('notices', 'message_' + numberOfNotices);
            numberOfNotices--;
            reloadNotices();
            }
        return;
    }

    // Remove non-core commands
    function removeCommands(){
        if (numberOfCommands > 14){

        }
    }

    // Setup podcast
    function podcastStart(name){
        // Add commands

        // Remove timers
        removeTimers();


        // Add timers
        $.inidb.set('notices', 'message_' + numberOfNotices, "command:podcast");
        numberOfNotices++;
        $.inidb.set('notices', 'message_' + numberOfNotices, "command:sotw");
        numberOfNotices++;
        $.inidb.set('notices', 'message_' + numberOfNotices, "command:q");
        numberOfNotices++;



    }
        // Title, game, commands, timers

    // Cleanup commands + timers

    // Setup streamer
        // Commands, timers

    // SOTW
        // Update the SOTW

})();