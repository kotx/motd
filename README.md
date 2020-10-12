# kotx/motd

A dynamic MOTD service to be deployed on Vercel.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/project?template=https://github.com/kotx/motd.git)

## Configuration (required)

Configuration is managed through environment variables.

`$MOTD_SEPARATOR` The character/string to split by. Ex. `§`

`$MOTD_MESSAGES`: A `$MOTD_SEPARATOR` delimited string. Ex. `hello§motd`
