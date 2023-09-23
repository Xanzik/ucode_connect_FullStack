ALTER TABLE ucode_web.users
ADD COLUMN status ENUM('user', 'admin') NOT NULL;
