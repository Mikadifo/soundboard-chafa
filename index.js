import { ActivityType, Client, Events, IntentsBitField } from "discord.js";
import main from "./register-commands.js";
import { getSounds, playSound } from "./utils/sounds.js";

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
    IntentsBitField.Flags.GuildVoiceStates,
  ],
});

client.once(Events.ClientReady, (c) => {
  client.user.setPresence({
    activities: [{ name: "/help", type: ActivityType.Listening }],
    status: "online",
  });

  console.log(`${c.user.tag} is online`);
});

client.on(Events.InteractionCreate, async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  const command = interaction.client.commands.get(interaction.commandName);
  if (!command) {
    return console.log(interaction.commandName, " was not found!");
  }

  try {
    await command.execute(interaction);
  } catch (error) {
    if (interaction.replied || interaction.deferred) {
      await interaction.followUp({
        content: "There was an error while executing this command!",
        ephemeral: true,
      });
    } else {
      await interaction.reply({
        content: "There was an error while executing this command!",
        ephemeral: true,
      });
    }
  }
});

client.on(Events.InteractionCreate, async (interaction) => {
  if (!interaction.isButton()) return;

  const sounds = getSounds().map(({ id, name }) => ({ id, name }));
  const pressedButton = sounds.filter(
    ({ id }) => id === interaction.customId
  )[0];

  const { success, errorMessage } = await playSound(
    pressedButton.id,
    interaction.guildId
  );

  if (!success) {
    return await interaction.update(
      `Displaying a total of ${sounds.length} sounds.\n${errorMessage}`
    );
  }

  await interaction.update(
    `Displaying a total of ${sounds.length} sounds.\nPlaying ${pressedButton.name}`
  );
});

main(client);
