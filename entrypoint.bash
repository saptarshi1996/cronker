service mysql start
service mysql status
service redis-server start

mysql -e "CREATE USER 'cronker'@'127.0.0.1' IDENTIFIED BY 'cronker'"
mysql -e "CREATE DATABASE IF NOT EXISTS cronker"
mysql -e "GRANT ALL ON cronker.* TO 'cronker'@'127.0.0.1';"
mysql -e "FLUSH PRIVILEGES;"

cd /app/prisma && npx prisma db push && npx prisma generate
cd /app/server && pm2 start
# cd /app/client && pm2 start
