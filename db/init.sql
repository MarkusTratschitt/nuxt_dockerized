-- Erstellen der Datenbank ROLLOUT
CREATE DATABASE IF NOT EXISTS ROLLOUT;
USE ROLLOUT;


-- Erstellen der Tabelle MITARBEITER
CREATE TABLE IF NOT EXISTS MITARBEITER (
    Mitarbeiter_ID INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    Mitarbeiter_Vorname VARCHAR(50) NOT NULL,
    Mitarbeiter_Name VARCHAR(50) NOT NULL,
    Mitarbeiter_Rolle VARCHAR(50) NOT NULL
);

-- Erstellen der Tabelle KUNDE
CREATE TABLE IF NOT EXISTS KUNDE (
    Kunde_ID INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    Kunde_Marktnummer VARCHAR(50) NOT NULL,
    Kunde_Strasse VARCHAR(100) NOT NULL,
    Kunde_Hausnummer VARCHAR(10) NOT NULL,
    Kunde_PLZ VARCHAR(10) NOT NULL,
    Kunde_Ort VARCHAR(100) NOT NULL
);

-- Erstellen der Tabelle AUFTRAG
CREATE TABLE IF NOT EXISTS AUFTRAG (
    Auftrag_ID INT PRIMARY KEY AUTO_INCREMENT,
    Kunde_ID INT,
    Mitarbeiter_ID INT,
    Status VARCHAR(100) NOT NULL,
    KW VARCHAR(10) NOT NULL,
    Installation_geplant DATE,
    Installation_Tag DATE,
    Abbruchdatum DATE,
    Kabeltausch_erledigt BOOLEAN DEFAULT FALSE,
    Problemfall BOOLEAN DEFAULT FALSE,
    Abschluss_Techniker BOOLEAN DEFAULT FALSE,
    Abschluss_Buero BOOLEAN DEFAULT FALSE,
    Unterschrift_Kunde VARCHAR(255),
    Unterschrift_Techniker VARCHAR(255),
    FOREIGN KEY (Kunde_ID) REFERENCES KUNDE(Kunde_ID) ON DELETE SET NULL,
    FOREIGN KEY (Mitarbeiter_ID) REFERENCES MITARBEITER(Mitarbeiter_ID) ON DELETE SET NULL
);

-- Erstellen der Tabelle PAKET
CREATE TABLE IF NOT EXISTS PAKET (
    Paket_ID INT PRIMARY KEY AUTO_INCREMENT,
    Kunde_ID INT,
    Status VARCHAR(100) NOT NULL,
    FOREIGN KEY (Kunde_ID) REFERENCES KUNDE(Kunde_ID) ON DELETE SET NULL
);

-- Erstellen der Tabelle GERAET
CREATE TABLE IF NOT EXISTS GERAET (
    Geraet_ID INT PRIMARY KEY AUTO_INCREMENT,
    Kunde_ID INT,
    Typ VARCHAR(100) NOT NULL,
    Status VARCHAR(100) NOT NULL,
    FOREIGN KEY (Kunde_ID) REFERENCES KUNDE(Kunde_ID) ON DELETE SET NULL
);

-- Erstellen der Tabelle ROUTE
CREATE TABLE IF NOT EXISTS ROUTE (
    Route_ID INT PRIMARY KEY AUTO_INCREMENT,
    Mitarbeiter_ID INT,
    Auftrag_ID INT,
    Installation_Tag DATE NOT NULL,
    FOREIGN KEY (Mitarbeiter_ID) REFERENCES MITARBEITER(Mitarbeiter_ID) ON DELETE SET NULL,
    FOREIGN KEY (Auftrag_ID) REFERENCES AUFTRAG(Auftrag_ID) ON DELETE CASCADE
);

-- Erstellen der Tabelle KOMMENTAR
CREATE TABLE IF NOT EXISTS KOMMENTAR (
    Kommentar_ID INT PRIMARY KEY AUTO_INCREMENT,
    Auftrag_ID INT,
    Problemfall_Kommentar TEXT NOT NULL,
    Kommentar_Datum DATE NOT NULL,
    FOREIGN KEY (Auftrag_ID) REFERENCES AUFTRAG(Auftrag_ID) ON DELETE CASCADE
);

INSERT INTO MITARBEITER (Mitarbeiter_Vorname, Mitarbeiter_Name, Mitarbeiter_Rolle)
VALUES 
('Max', 'Mustermann', 'Techniker'),
('Anna', 'Müller', 'Techniker'),
('John', 'Doe', 'Teamleiter'),
('Sarah', 'Schmidt', 'Büromitarbeiter'),
('Peter', 'Parker', 'Techniker');

INSERT INTO KUNDE (Kunde_Marktnummer, Kunde_Strasse, Kunde_Hausnummer, Kunde_PLZ, Kunde_Ort)
VALUES
('MN123', 'Hauptstrasse', '1', '12345', 'Berlin'),
('MN124', 'Nebenstrasse', '12', '54321', 'Hamburg'),
('MN125', 'Marktplatz', '45', '98765', 'München'),
('MN126', 'Ringstrasse', '9', '65432', 'Stuttgart'),
('MN127', 'Schlossallee', '99', '11111', 'Köln');

INSERT INTO AUFTRAG (Kunde_ID, Mitarbeiter_ID, Status, KW, Installation_geplant, Installation_Tag, Abbruchdatum, Kabeltausch_erledigt, Problemfall, Abschluss_Techniker, Abschluss_Buero, Unterschrift_Kunde, Unterschrift_Techniker)
VALUES
(1, 1, 'Offen', 'KW40', '2023-10-01', '2023-10-02', NULL, FALSE, FALSE, FALSE, FALSE, 'Kunde1_Sig.png', 'Techniker1_Sig.png'),
(2, 2, 'Abgeschlossen', 'KW41', '2023-10-03', '2023-10-04', NULL, TRUE, FALSE, TRUE, TRUE, 'Kunde2_Sig.png', 'Techniker2_Sig.png'),
(3, 3, 'Offen', 'KW42', '2023-10-05', '2023-10-06', NULL, FALSE, TRUE, FALSE, FALSE, 'Kunde3_Sig.png', 'Techniker3_Sig.png'),
(4, 1, 'In Bearbeitung', 'KW43', '2023-10-07', '2023-10-08', NULL, TRUE, TRUE, FALSE, FALSE, 'Kunde4_Sig.png', 'Techniker1_Sig.png'),
(5, 2, 'Abgebrochen', 'KW44', '2023-10-09', NULL, '2023-10-10', FALSE, TRUE, FALSE, FALSE, 'Kunde5_Sig.png', NULL);

INSERT INTO PAKET (Kunde_ID, Status)
VALUES
(1, 'Gesendet'),
(2, 'Empfangen'),
(3, 'Verarbeitet'),
(4, 'Verzögert'),
(5, 'Abgeschlossen');

INSERT INTO GERAET (Kunde_ID, Typ, Status)
VALUES
(1, 'Modem', 'Aktiv'),
(2, 'Router', 'Inaktiv'),
(3, 'Switch', 'Aktiv'),
(4, 'Modem', 'Defekt'),
(5, 'Router', 'Aktiv');

INSERT INTO ROUTE (Mitarbeiter_ID, Auftrag_ID, Installation_Tag)
VALUES
(1, 1, '2023-10-02'),
(2, 2, '2023-10-04'),
(3, 3, '2023-10-06'),
(1, 4, '2023-10-08'),
(2, 5, '2023-10-09');

INSERT INTO KOMMENTAR (Auftrag_ID, Problemfall_Kommentar, Kommentar_Datum)
VALUES
(3, 'Kabelprobleme bei der Installation.', '2023-10-06'),
(4, 'Techniker verspätet, Problem mit der Netzverbindung.', '2023-10-08'),
(5, 'Auftrag wurde abgebrochen wegen Kundenanfrage.', '2023-10-10');
