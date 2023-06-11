<p>You're probably wondering "wow, what can I do with these cool new Message Content intents?"</p>
<p>Well, I'm excited to share that this article is not about that, let's learn what you can do even <em>without</em> the intent - how exciting.</p>
<p>For those who didn't catch our <a href="https://support-dev.discord.com/hc/en-us/articles/4404772028055-Message-Content-Privileged-Intent-for-Verified-Bots" target="_blank" rel="noopener noreferrer">announcement</a>, message content is officially becoming a privileged intent after August 31, 2022. Although message content can enable you and your bot to do a lot of things, there is still functionality that can take place without the intent. Here are some tips to help build common use cases without the need for the message content intent.</p>
<p>First things first, please keep in mind that bots will always have access to message information in the following locations:</p>
<ul>
    <li>messages the bot receives in its DMs
        <ul>
            <li>Want to submit a ticket to the bot's devs or support server? Let them know!</li>
        </ul>
    </li>
    <li>messages the bot is @mentioned in
        <ul>
            <li>Imagine a command prefix, but instead of a special character, it's the entire bot's name.</li>
        </ul>
    </li>
    <li>messages the bot sends
        <ul>
            <li>Want to edit a cool leaderboard embed the bot sends at regular intervals? You still can!</li>
        </ul>
    </li>
</ul>
<p>If your application is dealing with messages that fit any of the above three criteria, then it still has access to all of the content in the message.</p>
<blockquote>
    <p><strong>Picture this:</strong> You have a crush on the bot. No matter how much you send messages in your server, the bot seems to be ignoring them. No problem, we're here to say you can ping them with @mentions or sneak into their DMs - that way you can <em>really</em> get their attention. Time to work up the courage and be more intentional!</p>
</blockquote>
<p>As mentioned previously, if a bot is unapproved for the message intent, certain fields of the message object will return empty when <strong>receiving a message:</strong></p>
<ul>
    <li>content</li>
    <li>embeds</li>
    <li>attachments</li>
    <li>components</li>
</ul>
<p>Information from other gateway events like guild members and presences are still locked behind those intents though.</p>
<p>We generally advise that if a function of your bot can be implemented in DMs or mentions without severely impacting the overall function or UX of your bot, to go for it instead of using the message content intent!</p>
<p><img src="https://support-dev.discord.com/hc/article_attachments/10327937393815" alt="1.png"></p>
<p>An example where the GUILD_MEMBERS gateway is inaccessible, thus returning null on member. The same happens with GUILD_PRESENCES.</p>
<p>Although not required, we are encouraging folks to look into alternatives and workarounds for their command functionalities wherever possible. Below are some examples on how some developers are still achieving common bot use cases without the intent!</p>
<p> </p>
<hr>
<h3>Messages sent by the bot</h3>
<p>Bots will always be able to read the data of messages that were sent by itself (not other bots, those are treated regular users). If you read your own message and didn't know <strong>who</strong> sent it, <strong>when</strong> you sent it, along with <strong>what</strong> it says.. bad example — okay you get my point.</p>
<p>So maybe you have a leaderboard that updates itself every couple minutes to check the latest top runs of Super Mario Sunshine (2002) speedruns on the GameCube.</p>
<pre><strong><span class="wysiwyg-color-green130">// fetch the latest SMSS speedrun times from the API</span><span class="wysiwyg-color-green130">
let leaderboard = new Discord.MessageEmbed()
	.setAuthor("Super Mario Sunshine Speedrun LB")
	.setFooter("Updates every so often")
	.setTimestamp()
	
	const lbData = await getStuff.fetch( =&gt; {
		for (let counter = 0; counter &lt; result.length; ++counter) {
        const { speedrunnerName, time } = result[counter]
        let name = speedrunnerName
        leaderboard.addField(`${counter + 1}) ${time} time`, `${speedrunnerName}`)
    }
	});

const lbUpdate = async (client) =&gt; {
	// look for the previous leaderboard
	const results = await lbData.find({})
		for (const result of results) {
			// edit the leaderboard with newest data
		}
	// set a timer to edit
}
</span></strong></pre>
<p>This is trying to demonstrate that if you were to log the embed data of all the runs currently in the leaderboard, the content (run times, speed runner names, etc.) would show up. So don't fret, your bot can still edit that message and it's contents with the fastest runs from the database of your choosing <strong>as long as the initial leaderboard message was sent by the bot</strong>!</p>
<p> </p>
<hr>
<h3>Direct Messages</h3>
<blockquote>
    <p>Talking about <em>Direct Messaging</em> and message intents. This may be important regardless of whether a bot has DM scripts set up or not.</p>
</blockquote>
<p>A bot <strong>regardless of message intent approval</strong> will still have access to the data in messages received in DMs. Some of this data includes:</p>
<ul>
    <li>author information (usernames, IDs, tags, avatar, etc.)</li>
    <li>message content</li>
</ul>
<p>Features like modmail, ticket systems, etc. can alternatively, wherever possible - be made with slash commands but we understand the potential difficulties with transitioning these specific functions to interactions.</p>
<p>It is all the more important then that users know the implications of sending DMs to bot. We advise that bot developers' policies on this are very transparent, and that unless there are no workarounds, that there are opt-in mechanics to more safely handle message content.</p>
<p>Generally, the information obtained from DM'd messages can only be stored if they are <strong>encrypted</strong> and <strong>made anonymous.</strong> Any data considered <strong>Personally Identifiable Information (PII)</strong> should only be stored depending on how relevant it is to the major/proper function of the bot.</p>
<p>We generally recommend that this information not be stored for extended periods of time and that folks automatically delete unused data after 30 or so days.</p>
<p>Additionally, message contents can only be stored for long periods of time for specific use cases that would be subject to more thorough review by the review team.</p>
<p>Maybe a user wants to submit a ticket to your support server. Here's a simple way of doing something like that with direct messaging:</p>
<p>1. Listen for when someone wants to create ticket.</p>
<pre><span class="wysiwyg-color-green130"><strong>// createTicket slash command is fired up
if (interaction.commandName == "ticket") {
	client.users.fetch(`${interaction.author.id}`).then(user =&gt; {
			user.send('Type out your ticket below.');
		}
	)
		interaction.reply('Check your DMs!')
}
</strong></span></pre>
<p>2. Probably use some combination of message collectors to get ticket body, but let's keep it basic for now.</p>
<pre><span class="wysiwyg-color-green130"><strong>// get the bot's support server/channel to send the tickets to
const supportChannel = client.channels.cache.get(supportChannelID);

// on any message event that isn't sent by a bot
client.on('messageCreate', message =&gt; {
		// author is still accessible
		if (message.author.bot) return;
		// DMs are a type of channel within the message
    if (message.channel.type == "dm") {
				// create an embed message for the ticket
				const embed = new Discord.MessageEmbed().setTitle('Support Ticket');
				embed.addField(
					`Sent by ${message.author.tag}`,`${message.content}.toString()`
				).catch(e =&gt; console.log(e));
				// send the embed
        supportChannel.send(embed)
    }
});
</strong></span></pre>
<p>This example is of a bot that is constantly listening for messages sent by DMs. The point here is to demonstrate that when a message is DM'd directly to the bot, it could still make an embed with the message content and send the embed to a support channel. With some additional configuration, it could only start collecting messages specifically after the <span class="wysiwyg-color-red"><strong><code>/ticket</code></strong></span> command is invoked, or even chained responses.</p>
<p> </p>
<hr>
<h3>@Mentions</h3>
<p>As indicated earlier, bots still have access to the contents and data of messages that they're mentioned in. Imagine being in a group chat with a bunch of people. You turn off your notifications because sometimes you just don't want or have any reason to read all of the messages sent within.</p>
<p>Think of it this way: your crush, the bot, seems to be ignoring every message you send in the server. So you work up the courage by @mentioning them by name to get their attention. But unlike your crush, the bot will open up and read the contents of your message every single time - how great is that!</p>
<pre><strong><span class="wysiwyg-color-green130">client.on('message', async (message) =&gt; {
	const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

	if (message.author.id == botID) return;
	if (!message.content.startsWith(`&lt;@botID&gt;`)) {
		return;
	} else 
		if (command === 'ping') {
			return message.channel.send('pong');
		}
});
</span></strong></pre>
<p>You know the drill. If you've got message-based prefixes for your commands, you most likely have some version of filter to make sure your bot is only reacting to the right things.</p>
<p>Congratulations, now you're on a first-name basis with your bot! (F in the chat for the folks out there too shy to @mention their crushes.)</p>
<p>Keep in mind that this example covers @mentions as a replacement for the command prefix, but as long as the bot is @mentioned in a message AT ALL, it'll have access to the contents within. From the front, to the back of the message, and every where in between.</p>
<p> </p>
<hr>
<h3>Interaction Series: <a href="https://discord.com/developers/docs/interactions/application-commands" target="_blank" rel="noopener noreferrer">Slash Commands</a>!</h3>
<p>You can think of it this way: if your command doesn't need to know WHAT is being said or WHO sent the message, then it could likely be migrated to a slash command. These types of commands will likely have predefined results that do not change depending on data from the message.</p>
<p>Interactions give you access to things like:</p>
<ul>
    <li>interactionID (the ID of the interaction/command)</li>
    <li>applicationID (the bot ID this command belongs to)</li>
    <li>member (user who sent command)</li>
    <li>channelID (channel the command was sent from)</li>
    <li>guildID (guild the command was sent from)</li>
    <li>message (message the component/button is attached to)</li>
</ul>
<p>Note: Don't use user reactions as buttons. Use the built-in message components like buttons.</p>
<h3>A magic 8ball</h3>
<pre><span class="wysiwyg-color-green130"><strong>client.on('interactionCreate', async interaction =&gt; {
// not every interaction is a slash commmand
	if (!interaction.isCommand()) return;
  if (interaction.commandName == "8ball") {
		// some random results from the 8ball
		let replies = [
			"Yes, of course!",
			"Perhaps not.",
			"Oh gosh, definitely not!",
			"This might be good.",
		]
		let random = Math.floor(Math.random() * replies.length);
		await interaction.reply(`8ball results: &lt;@${interaction.member.id}&gt;! ${replies}[random]`)
    }
});
</strong></span></pre>
<p>The reason this type of command function still operates properly is because the action is relatively <em>static</em>. The final result will always be one of four replies, there isn't any message content or other factors that are influencing the result. Contrary to popular belief, the magic 8ball answers questions independent from user input.. yeah.. I know right..</p>
<p> </p>
<hr>
<h3>Interaction Series: <a href="https://discord.com/developers/docs/interactions/message-components#buttons" target="_blank" rel="noopener noreferrer">Buttons</a>!</h3>
<p><img src="https://support-dev.discord.com/hc/article_attachments/10327893146903" alt="2.png"></p>
<p>Buttons can be used for a plethora of different things, but we'll focus on a specific use case that could replace the need for message intents.</p>
<p>Maybe you're thinking of beefing up the security/moderation of your server. Remember, even without the message intent, bots will know <em>when</em> someone sends a message, just not specifically <em>what</em> they said. Suppose you're picking up some suspicious behavior from a user then.</p>
<p>How do you verify that they're not a bad bot or up to no good? That's right.. everybody's favorite - CAPTCHA.</p>
<pre><span class="wysiwyg-color-green130"><strong>/* after too many messages, prompt the user to click the correct
button to verify they're human or something
*/

// pass in the message that triggered the captcha system
function verify(message) {
	// get a random number between 1 - 10
	const passBtn = Math.floor(Math.random() * 11);
	// assign customIDs to ten buttons
	var btn1 = new MessageButton().setStyle('PRIMARY').setLbael('1').setCustomId('1')..
	..
	..
	;
	// attach the buttons as components to a message
	var row = new MessageActionRow().addComponents([btn1, ...])
	// notify the user the bot is awaiting their input
	interaction.editReply({
		embeds:[new MessageEmbed()
			.setTitle('Verify your identity')
			.setDescription(`Click ${passBtn} button.`)
		],
		components: [row],
		ephemeral: true
	});

	// collect clicks only from the user who initiated the interaction
	const filter = async (i) =&gt; {
		return i.user.id === interaction.user.id &amp;&amp; i.isButton() &amp;&amp; i.message.author.id == client.user.id
	}
	try {
		const collector = interaction.channel.createMessageComponentCollector({
			filter,
			max: 1,
			time: 1000 * 10,
		})
		collector.on('collect', async (i) =&gt; {
			if (passBtn === icustomId) {
				// user pressed the right button
			} else {
				// user did not press the right button
			}
		})
	} catch (e) {
		// something just borked
	}
}
</strong></span></pre>
<p>When a user clicks a button, the bot will receive an interaction (i) with data like:</p>
<ul>
    <li>when a button was clicked</li>
    <li>which button was clicked</li>
    <li>who clicked the button</li>
</ul>
<p>— from which the bot can do a bunch of stuff.</p>
<p>Suppose the captcha generated the number '5'. Instead of requiring the user to type in their response, the user is prompted to click the button with the same <span class="wysiwyg-color-red"><strong><code>customID</code></strong></span> (a developer-defined string of a max 100 characters) as the randomly generated number, in this case, '5'. The bot can then compare the clicked button's <span class="wysiwyg-color-red"><strong><code>customID</code></strong></span> with the "captcha" number.</p>
<p>In the above example, the message is invisible (ephemeral) to other users and there is a filter ensuring that it's only accepting clicks from the correct user. You could even achieve this entire interaction in DMs!</p>
<p>If you're making something that operates off multiple choices, maybe a questionnaire, poll or something - check out buttons. We've seen folks in the past use reactions and collectors in a similar way, consider switching to interactions to do the same thing.. but better!</p>
<p>Let your creativity go wild! We're excited to see what you come up with.</p>
<p> </p>
<hr>
<h3>Interaction Series: <a href="https://discord.com/developers/docs/interactions/message-components#select-menus">Select Menus</a>!</h3>
<p><img src="https://support-dev.discord.com/hc/article_attachments/10327893221143" alt="3.png"></p>
<p>Similar to buttons - maybe you'd like for users to select from a list of roles to be a part of? Instead of having to join them into the roles manually, users are able to do it with commands following tagging the name of the role! Oh.. but that requires multiple text inputs...</p>
<p>Well, do we have good news for you.</p>
<pre><span class="wysiwyg-color-green130"><strong>client.on('interactionCreate', async interaction =&gt; {

	// slash command roles
	if (interaction.commandName === 'roles') {
		await interaction.reply({
			content: 'Loading roles list..',
			ephemeral: true
		});
		// add three roles as the possible options
		const row = new MessageActionRow()
			.addComponents(
				new MessageSelectMenu()
					.setCustomId('roles')
					.setPlaceholder('no role selected')
					.addOptions([
						{
							label: 'House Bravery',
							description: 'Unflinching, unyielding.',
							value: 'brave',
							emoji: {}
						},
						{
							label: 'House Brilliance',
							description: 'Bot development, research',
							value: 'brilliant',
							emoji: {}
						},
						{
							label: 'House Balance',
							description: 'Inner peace, outer harmony.',
							value: 'balanced',
							emoji: {}
						},
					]),
			);
		await interaction.editReply({
			content: 'Select a role to join!',
			components: [row]
		});
	}

	// listen for an interaction with the customId for roles selection
	if (interaction.customId === 'roles') {
		await interaction.update({
			content: 'A role was selected',
			components: []
		});

		// reply to the interaction by changing the role
		interaction.reply(someFunction)
		return;
	}

});
</strong></span></pre>
<p>When firing up the <span class="wysiwyg-color-red"><strong><code>/roles</code></strong></span> command, the bot sends a message asking the user to make a selection from the dropdown box. In the dropdown will be a list of roles (up to 25) featuring the name of the role, a short description of the role, and maybe even a role icon for those looking for a little spice!</p>
<p>When the user finishes making their choice by clicking out of the dropdown, the bot will receive an interaction. The bot will then have the value, id, user, etc. - all of the data with which to assign the corresponding role to the user.</p>
<p>You could even allow users to make their selection and join roles from the privacy of their DMs by sending the interaction there as the interaction will also contain the guildID and even channelID from which the original command was used. Couple of additional steps with getting the role by guildID and voilà! — all that without having to type anything more than <span class="wysiwyg-color-red"><strong><code>/roles</code></strong></span> .</p>
<p> </p>
<hr>
<h2>In Conclusion</h2>
<p>..All this and we've only barely scratched the surface of what can be done with interactions. We hope this got some of those mind juices flowing - there are so many use cases that we didn't cover that are possible without message content. Of course, we can't just have all the fun ourselves so we're excited to see what you can come up with. We built interactions to help users more easily engage with bots and hope to continue to see the same creativity, effort, and passion put into making servers just that much more enjoyable.</p>
<p>You can read more about interactions/application commands: <a href="https://discord.com/developers/docs/interactions/application-commands" target="_blank" rel="noopener noreferrer">here</a>.</p>
<p>You can read over our announcement about message content: <a href="https://support-dev.discord.com/hc/en-us/articles/4404772028055-Message-Content-Privileged-Intent-for-Verified-Bots" target="_blank" rel="noopener noreferrer">here</a>.</p>