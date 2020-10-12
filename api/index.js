const messages = process.env.MOTD_MESSAGES.split(process.env.MOTD_SEPARATOR);

export default function(req, res) {
  res.send(messages[Math.floor(Math.random()*messages.length)]);
}
