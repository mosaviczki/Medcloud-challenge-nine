-- CreateTable
CREATE TABLE `users` (
    `iduser` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `image` VARCHAR(191) NULL,
    `phone` INTEGER NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`iduser`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `patients` (
    `idpatient` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `image` VARCHAR(191) NULL,
    `birth` DATETIME(3) NOT NULL,
    `phone` INTEGER NOT NULL,
    `cpf` INTEGER NOT NULL,
    `rg` INTEGER NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `adress` VARCHAR(191) NOT NULL,
    `numberAdress` INTEGER NOT NULL,
    `district` VARCHAR(191) NOT NULL,
    `complement` VARCHAR(191) NULL,
    `zipcode` INTEGER NOT NULL,
    `city` VARCHAR(191) NOT NULL,
    `uf` VARCHAR(191) NOT NULL,
    `user_id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`idpatient`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `patients` ADD CONSTRAINT `patients_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`iduser`) ON DELETE RESTRICT ON UPDATE CASCADE;
