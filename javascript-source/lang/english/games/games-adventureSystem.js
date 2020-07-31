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

$.lang.register('adventuresystem.adventure.usage', 'Usage: !adventure [$1].');
$.lang.register('adventuresystem.alreadyjoined', 'You have already joined the adventure and are preparing for your quest to a strange land!');
$.lang.register('adventuresystem.completed', 'The adventure ended! Survivors are: $1.');
$.lang.register('adventuresystem.completed.no.win', 'The adventure ended! There are no survivors.');
$.lang.register('adventuresystem.completed.win.total', 'The adventure ended with $1 survivor(s) and $2 death(s).');
$.lang.register('adventuresystem.join.bettoohigh', 'You cannot join with $1, the maximum is $2.');
$.lang.register('adventuresystem.join.bettoolow', 'You cannot join with $1, the minimum is $2.');
$.lang.register('adventuresystem.join.needpoints', 'You cannot join with $1, you only have $2.');
$.lang.register('adventuresystem.join.notpossible', 'You cannot join now.');
$.lang.register('adventuresystem.join.success', 'You have joined the adventure with $1!');
$.lang.register('adventuresystem.loaded', 'Loaded adventure locations (found $1).');
$.lang.register('adventuresystem.loaded.prefix', 'Loaded $1 adventure locations from $2.');
$.lang.register('adventuresystem.payoutwhisper', 'Adventure completed, $1 + $2 has been added to your balance.');
$.lang.register('adventuresystem.runstory', 'Starting an adventure to "$1" with $2 player(s).');
$.lang.register('adventuresystem.set.success', 'Set $1 to $2.');
$.lang.register('adventuresystem.set.usage', 'Usage: !adventure set [settingname] [value].');
$.lang.register('adventuresystem.start.success', '$1 is trying get a team together for an adventure into a strange land! Use "!adventure [$2]" to join in!');
$.lang.register('adventuresystem.tamagotchijoined', '$1 is also joining the adventure.');
$.lang.register('adventuresystem.top5', 'The top 5 adventurers are: $1.');
$.lang.register('adventuresystem.top5.empty', 'There haven\'t been any adventure winners recorded yet.');
$.lang.register('adventuresystem.reset', 'The adventuring flock has recuperated ! Use "!adventure [$1]" to start a new adventure!');

$.lang.register('adventuresystem.stories.default', 'true');

$.lang.register('adventuresystem.stories.1.title', 'Worthers\' Sweet Shop');
$.lang.register('adventuresystem.stories.1.chapter.1', 'The flock is hungry for some sweet treats. We set our eyes on the shiny prize of golden Worthers Original from Worthers\' Sweet Shop.');
$.lang.register('adventuresystem.stories.1.chapter.2', 'Eagle eyed Worthers always protects his stash. (caught) were not lucky enough to escape his eagle eyed watch and were dragged away for a savage beating.');
$.lang.register('adventuresystem.stories.1.chapter.3', '(survivors) were sneaky and managed to escape the eagle eyes of Worthers. They made of with sweet treats straight out of his stash.');

$.lang.register('adventuresystem.stories.2.title', 'Frisky\'s Coffee Shop');
$.lang.register('adventuresystem.stories.2.chapter.1', 'The flock has grown tired and is in need of caffeine. We decided to raid the best beans from the legendary coffee shop owned by the fantastic Frisky.');
$.lang.register('adventuresystem.stories.2.chapter.2', 'The shop is protected by unicorns. (caught) were spotted and put into a magical trance rendering them unable to escape with the beans.');
$.lang.register('adventuresystem.stories.2.chapter.3', 'It was a close call but (survivors) managed to escape with the beans right under the noses of Frisky\'s unicorns.');

$.lang.register('adventuresystem.stories.3.title', 'Swart\'s Braai');
$.lang.register('adventuresystem.stories.3.chapter.1', 'The flock catches the smell of meat cooking and plans an adventure to steal some steaks from Swart\'s braai.');
$.lang.register('adventuresystem.stories.3.chapter.2', 'Swart comes out to check on his meat and catches (caught). We haven\'t heard from them since!');
$.lang.register('adventuresystem.stories.3.chapter.3', '(survivors) sneakily hid in the bushes until Swart had gone inside to get more beer and managed to sneak away with some meat to tuck into later.');

$.lang.register('adventuresystem.stories.4.title', 'Eddquarters');
$.lang.register('adventuresystem.stories.4.chapter.1', 'The flock is in need of new tech. Word on the wind is that Eddquarters is full of cool toys of the technical variety and a mission is launched to steal some.');
$.lang.register('adventuresystem.stories.4.chapter.2', 'Eddquarters is protected by lasers! (caught) were not careful enough and got fried.');
$.lang.register('adventuresystem.stories.4.chapter.3', 'Using all their skill (survivors) manage to avoid the laser and make off with some cool loot!');

$.lang.register('adventuresystem.stories.5.title', 'BTC\'s House');
$.lang.register('adventuresystem.stories.5.chapter.1', 'The flock is looking for some OP shloot! We know just the place to get some. BTC\'s House!');
$.lang.register('adventuresystem.stories.5.chapter.2', 'BTC\'s dogs were on the prowl and attacked (caught) retrieving the shloot that they stole.');
$.lang.register('adventuresystem.stories.5.chapter.3', '(survivors) managed to evade the dogs and make off with some crispy schloot!');


/*
 * Using the stories that come with PhantomBot:
 *
 * - All stories that are bundled with the bot are in the namespace adventuresystem.stories.*
 * - If you do not want to use these stories, set the following in your custom language file:
 *     $.lang.register('adventuresystem.stories.default', 'false');
 *
 * Rules on writing your own adventure story:
 *
 * - Stories are automatically loaded from the language file by their sequence number (adventuresystem.stories.custom.[This number]).
 * - It is recommended to use a custom language file for your own stories.
 * - Keep the format of your story as shown above, adding the '.custom' portion of the identifier.
 * - There can be an unlimited number of stories, IF you keep their subsequence numbers 1, 2, 3, 4, 5...
 * - A story must have a title.
 * - A story can have an unlimited number of chapters, IF you keep their subsequence numbers 1, 2, 3, 4, 5...
 * - Stories are picked at random.
 *
 ** Game specific story how-to. You also need to make sure that you at least have ONE story that doesn't require a specific game.
 ** Please make sure that your story number also follow along. What I mean by that is it needs to start from 1 and go up. Same with the chapters.
 * - Add $.lang.register('adventuresystem.stories.NUMBER.game', 'GAME NAME IN LOWER CASE'); on top of the story chapter.

 * Example >
 * $.lang.register('adventuresystem.stories.custom.1.game', 'programming');
 * $.lang.register('adventuresystem.stories.custom.1.title', 'Talk Shows');
 * $.lang.register('adventuresystem.stories.custom.1.chapter.1', 'random story...');
 *
 * Underneath is a template for your first custom story, just remove the preceding slashes.
 */

//$.lang.register('adventuresystem.stories.custom.1.title', '');
//$.lang.register('adventuresystem.stories.custom.1.chapter.1', '');
//$.lang.register('adventuresystem.stories.custom.1.chapter.2', '');
//$.lang.register('adventuresystem.stories.custom.1.chapter.3', '');
