

#!/bin/bash

# Reload Nginx
sudo service nginx reload

# Reset PM2 process
cd /home/frog/app
pm2 restart server.js
