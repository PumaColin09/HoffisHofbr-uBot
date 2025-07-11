require("dotenv").config();
const Discord = require("discord.js");
const client = new Discord.Client({
    intents: 3276799
});

const databases = {};
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const process = require("process");
process.on("uncaughtException", (e) => {
    console.error(e);
});

const ms = require("ms");



client.setMaxListeners(0);

client.on("ready", async () => {
    console.log(client.user.tag + " is logged in!");
});

client.login((process.env['token']));

client.on("ready", async () => {
    while (true) {
        ((client.guilds.cache.get('1225886147259928656')).channels.cache.get('1389974971199131729')).send({
            content: '/bump',
            embeds: []
        }).then((messageSent) => {
            await wait((ms('3h10m')));
        });
    }
});