-- CreateTable
CREATE TABLE `users` (
    `iduser` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`iduser`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `patients` (
    `idpatient` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `birth` DATETIME(3) NOT NULL,
    `phone` VARCHAR(191) NOT NULL,
    `cpf` VARCHAR(191) NOT NULL,
    `rg` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `adress` VARCHAR(191) NOT NULL,
    `numberAdress` VARCHAR(191) NOT NULL,
    `district` VARCHAR(191) NOT NULL,
    `complement` VARCHAR(191) NULL,
    `zipcode` VARCHAR(191) NOT NULL,
    `city` VARCHAR(191) NOT NULL,
    `uf` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`idpatient`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
