-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 30. Sep, 2019 17:37 PM
-- Server-versjon: 10.1.29-MariaDB
-- PHP Version: 7.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `drammensacred`
--

-- --------------------------------------------------------

--
-- Tabellstruktur for tabell `contact_persons`
--

CREATE TABLE `contact_persons` (
  `id` int(11) NOT NULL,
  `name` varchar(50) COLLATE utf8_bin NOT NULL,
  `email` varchar(50) COLLATE utf8_bin DEFAULT NULL,
  `role` varchar(50) COLLATE utf8_bin DEFAULT NULL,
  `phone` varchar(15) COLLATE utf8_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dataark for tabell `contact_persons`
--

INSERT INTO `contact_persons` (`id`, `name`, `email`, `role`, `phone`) VALUES
(1, 'Ivar Flaten', 'director@drammensacred.no', ' Produsent og festival-gründer', '41545849'),
(2, 'Reidun Svabø', 'director@drammensacred.no', 'Styreleder og festivalkoordinator', '932 94 512');

-- --------------------------------------------------------

--
-- Tabellstruktur for tabell `events`
--

CREATE TABLE `events` (
  `id` int(11) NOT NULL,
  `title` varchar(50) COLLATE utf8_bin NOT NULL,
  `text` text COLLATE utf8_bin,
  `time` time DEFAULT NULL,
  `date` date DEFAULT NULL,
  `price` int(11) DEFAULT '0',
  `youtube_link` text COLLATE utf8_bin,
  `payment_link` text COLLATE utf8_bin,
  `livestream` tinyint(1) DEFAULT '0',
  `u_id` int(11) DEFAULT NULL,
  `v_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dataark for tabell `events`
--

INSERT INTO `events` (`id`, `title`, `text`, `time`, `date`, `price`, `youtube_link`, `payment_link`, `livestream`, `u_id`, `v_id`) VALUES
(1, 'Intimkonsert med Beharie', 'Med sitt utspring fra Soul og R&B-sjangeren, formidler Christian Beharie’s karakteristiske stemme popmelodikk i et spennende landskap, flytende mellom det organiske og elektroniske.\r\n\r\nVåren 2018 har Beharie jobbet med sin debut-EP som skal gis ut til høsten.\r\n\r\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', '15:00:00', '2019-12-12', 200, NULL, 'https://www.ticketmaster.com/', 1, 1, 1),
(2, 'Waed Bouhassoun', 'Waed Bouhassoun reiser aldri uten sin lutt og noen dikt fra den syriske poeten, Adonis. Konsertene hennes er en hyllest til Sufi – tradisjonen.\r\n\r\nWaed Bouhassoun har vokst opp med Oum Khalthoum og Farid-al-Atrache, ikoner i den arabiske verden, som veivisere. Under sine studier på Musikkhøgskole i Damas, utviklet hun en unik og personlig stil dypt forankret i klassiske arabiske musikktradisjoner.\r\n\r\nÅrets åpningskonsert for Drammen Sacred Music Festival er en sjelden opplevelse for sjelen!\r\n\r\nErik Hillestad innleder konserten med en kort presentasjon.\r\n\r\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ', '10:00:00', '2019-09-10', 120, 'https://www.youtube.com/watch?v=O9BFsFNqBvk', 'https://www.ticketmaster.com/', 0, 1, 4),
(3, 'Vintermåne', 'Vintermåne er ei gruppe som starta sitt samarbeid i 1997. De var da alle studenter på rytmisk linje ved Musikkonservatoriet i Kristiansand. Siden den gang har de holdt sammen og hatt et høyt aktivitetsnivå med konserter, eventer og skoleturneer.\r\n\r\nVintermåne tolker folkemusikk fra Telemark. Musikken tar utgangspunkt i tradisjonelle toner fra eldre lydopptak. I arrangementene forsøker de å legge til rette for det melodiøse og det tekstlige samtidig som de har frie rammer og åpne ører til hverandre musikalske krumspring.\r\n\r\nEtter 20 år på veien og med tre plateutgivelser i ryggen, markerer Vintermåne nå 20- årsjubileet med ei rykende fersk plate. På konserten i Fjell kirke blir det feiring av plateslipp og premiere på nytt repertoar fra innspillingen.\r\nFrøydis Grorud – sax og fløyter.\r\nFrøydis er kjent for mange av oss som saxofonist i tv-programmet Beat for Beat. Frøydis er en allsidig musiker med et særegent melodiøst uttrykk. Hun har gitt ut flere plater – som solist og i samarbeid med blant andre Bugge Wesseltoft , Torun Eriksen, Trond Lien og en rekke andre musikere. Frøydis spiller bl a med Trio de Janeiro, Torun Eriksen, Gaute Ormåsen, Christian Ingebrigtsen og Truse Kristin Klæbo. Hun har også sin egen jazzkvartett med egetskrevet materiale.\r\n\r\nTorjus Vierli – tangenter av ulike slag. Torjus er en flittig benyttet musiker både som livemusiker og studiomusiker. Hans spill er elegant og særegent rytmisk leikent. Han spiller bl a med Odd Nordstoga, Sissel K, Sigvart Dagsland og Morten Abel. Torjus er en tekniker av rang, og bruker også mye tid som produsent og arrangør i sitt studio i Grimstad. Han er også fast musiker og produsent i gruppen Garness.\r\n\r\nAnne Gravir Klykken – sang. Anne jobber både som kvedar og som formidler av annen sang innenfor rytmiske sjangre. Hun samarbeider bl a med Iver Kleive, Bugge Wesseltoft, Aasmund Nordstoga, Mattis Kleppen og Knut Buen. Anne har gitt ut to soloplater og vært med på en rekke innspillinger med andre artister.', '15:00:00', '2019-09-11', 180, 'https://www.youtube.com/watch?v=Y35gfvw-mI8', 'https://www.ticketmaster.com/', 0, 1, 5),
(4, 'Bokbad – Tro på tvers', 'Bushra Ishaq og Sunniva Gylver – to etablerte og sterke samfunnsrøster – har skrevet boken Tro på tvers hvor utforsker hverandres og sin egen tro. Boka er en utradisjonell dialog, der religiøse refleksjoner fra ulike tradisjoner stilles side om side.\r\n\r\nDet handler om hverdagstroen, slik den kan arte seg for en kristen og for en muslim. På tross av alt vi vet om hverandre, kjenner vi sjelden til den spiritualiteten som skjuler seg bak den andres religion. Hva tror du egentlig på? Hva er viktig for deg?\r\n\r\nGylver og Ishaq ønsker å lære av hverandre, og med det lar de også oss få lære. Ivar Flaten, dialogprest i Drammen, snakker med de to om boken og deres erfaringer som dialogmennesker.\r\n\r\nKNELENDE OG OPPREIST\r\nIdeen kom under en av våre lange samtaler i sofaen. Sunniva fortalte om da hun uka før fant\r\nen liten diktbok i en bokhandel i København. Midt i kassakøen oppdaget hun et nydelig dikt\r\nav poeten Helle Søtrup: «Knelende blir allting større. Også jeg selv.» Bushra husket en\r\nmuslimsk parallell: «Den som kneler for Allah, kan stå oppreist for hvem som helst.»\r\nVi opplever begge at troen vår gir oss et perspektiv på livet, verden og oss selv som er\r\ngodt og frigjørende. Samtidig erfarer vi fordommer mot både kristendom og særlig islam, og\r\nat kunnskapen om muslimsk og kristen hverdagstro er liten. Ekstreme, ødeleggende, eller\r\neksotiske versjoner av begge religioner er det som får plass i offentligheten. Hvordan kan vi\r\nnå ut med noe annet?\r\n\r\nNoen prosjekter er mer spennende enn andre, mer risikofylte, krevende, lærerike.\r\nDette er ett av dem. Vi ble kjent for over ti år siden, gjennom en nasjonal dialoggruppe\r\nunder navnet Kontaktgruppen mellom Islamsk Råd Norge og Mellomkirkelig Råd for Den\r\nnorske kirke. Gruppen reiste til Sarajevo, Mostar og Srebrenica, og vi to hadde store\r\nsamtaler på veien, om tro, tilgivelse, menneskesyn, håp, det onde. Vi er temmelig forskjellige\r\ndamer, men vi ble gode venninner.\r\n\r\nVi møtes ute, hjemme, på kafé, og skravler om store og små ting. Ofte handler det\r\nom tro. Mange vi kjenner forbinder religionsdialog med bare rent politiske og etiske\r\nspørsmål, mens vi selv opplever at noen av våre fineste samtaler handler om hva vi synes er det beste og det vanskeligste ved vår egen hverdagstro: om trosvaner, gudsbilde, åndelige\r\nerfaringer, språk på tro, åndelig veiledning, trosfloker. Mange vi møter, som ikke har nære\r\nvenner av annen tro, vet ofte lite om disse sidene ved andres trospraksis, mens nettopp den\r\ntype samtaler har bundet oss sterkt sammen og lært oss mest.\r\nIdeen fra samtalen sofaen var at vi ville forsøke å lage en slik bok sammen. En slags\r\nandaktsbok for både kristne og muslimer. Ved at andaktene står mellom samme permer\r\nhåper vi at leseren vil få med seg tekster han kanskje i utgangspunktet ikke ville funnet fram\r\ntil (selv om man også kan velge å lese kun Bushras tekster eller kun Sunnivas).\r\nAndakt som konsept finnes ikke, så vidt vi vet, i islam. Sånn sett er dette et lite\r\npionerarbeid fra Bushras side. Vi har forsøkt å nærme oss en slags felles sjanger, samtidig som vi har valgt å beholde hver vår tydelige stemme. Bushra er lege, forsker og samfunnsdebattant og hennes tekster og perspektiver preges av det. Sunniva er prest og skribent og har vært trosformidler på fulltid i en årrekke.\r\n\r\n«Mener dere at dere tror på den samme Gud?» Det er et av spørsmålene vi har fått\r\nflere ganger i løpet av arbeidet med denne boka, fulgt av en bekymring for religionsblanding.\r\nSvaret på spørsmålet er like enkelt og komplekst som dialogen selv er. Ja, vi tror på samme\r\nGud. Fordi vi begge bekjenner én Gud, himmelens og jordens skaper, dommer og frelser,\r\nsom kjenner og elsker oss alle. Nei, vi tror ikke på samme Gud. Fordi Sunniva tror på en\r\ntreenig Gud som ble menneske, korsfestet og reist opp – det gjør ikke Bushra. Og slik kunne\r\nvi svart på mange spørsmål knyttet til denne bokens temaer. Vi underslår ikke forskjellene\r\nmellom muslimsk og kristen tro og teologi, men for det første er verken kristendom eller\r\nislam enhetlige størrelser, og for det andre finner vi det mer fruktbart å utforske egen og\r\nhverandres tro utfra en overbevisning om at min tro ikke blir mindre sann eller viktig når den\r\nstår ved siden av din.\r\n\r\nDette har vært et spennende kapittel i vår personlige dialog. Vi har begge erfart at\r\ndialogen får oss til å se den andres tro og tradisjon litt mer innenfra, og vår egen litt mer\r\nutenfra. Og at vi inspirerer og utfordrer hverandre til å få troen enda mer ned i kroppen og\r\nut i hverdagen.\r\n\r\nVårt ønske med denne boka er å dele vår hverdagstro og bidra til at flere utforsker\r\nbåde egen og andres tro. Vår erfaring er at mange mangler språk for sin tro. Det kan være\r\nvanskelig å koble tro, teologi, hverdag og erfaringer tett nok sammen, og dele det med\r\nandre. Hvis denne boka kan bidra til at det blir litt enklere for flere, da er vi storfornøyde!\r\n\r\nGuds fred og maxbless\r\nBushra Ishaq og Sunniva Gylver', '19:00:00', '2019-09-12', 0, NULL, NULL, 0, 1, 4),
(5, 'Open Living Room: Radical devotion', 'Radical Devotion spiller mantraer, hengivende sanger og lydhealing. Et felt hvor alt kommer sammen til ett igjennom musikken. Hjertet åpnes i det musikken fører oss inn i en fredfull klar væren.\r\n\r\nRadical Devotion består av Trond Erland Sigvartsen, sang og gitar og Linda Grahn, sang og harmonium. Sammen deler de sin lidenskap for meditasjonsmusikk. De har holdt det gående siden 2010 med jevnlige konserter, retreater og festivaler. Radical Devotions versjon av Gayatri Mantra fra retreat med Sri Mooji i Lisboa har mer enn 190000 views på youtube.\r\nVelkommen til en konsert med indre verdensmusikk som inviterer deg til dybden av meditasjon.', '15:00:00', '2019-09-12', 100, NULL, 'https://www.ticketmaster.com/', 0, 1, 1),
(6, 'Under regnbuen – Jakobsmesse V', 'Ny messe – skapt i takknemlighet over mangfoldet av religioner.\r\n\r\nTekstene til ”Messe under regnbuen” er skrevet av Erik Hillestad, musikk av Øyvind Kristiansen. I messen blir hver av de store verdensreligionene speilet gjennom takkebønner. ”I en tid der motsetninger mellom religionene dyrkes og fremheves er det en kjærlighetsgjerning å feire denne messen”, hevder opphavsmennene.\r\n\r\n”Messe under regnbuen” som har nye ord og toner bygger på den tradisjonelle messestrukturen. Den bruker regnbuen som symbol for fred og mangfold. De som har skapt den hevder at de ønsker å fremheve andre religioners bidrag til å vekke til live gudsbildet i hvert enkelt menneske og deres bidrag til humanitet, fred og sameksistens i respekt for forskjeller.\r\n\r\nSiste dag av årets festival inviterer vi til Messe under regnbuen med lokale prester og musikere i Strømsø kirke.\r\n\r\nMedvirkende:\r\nKaroline Faber og Ivar Flaten (liturger) / forsangergruppe / kapellmester Audun Reknes (klaver), Andrea Louise Horstad (sang), Andreas Haga (bass), Jonas Kilmork Vemøy (trompet), Kim Andre Vian Bjerkestrand (trommer) og vokalgruppen Doremix (forsangere/solister).\r\n\r\nGudstjenesten er et samarbeid mellom Strømsø menighet, Bykirken Strømsø, Kirkens Bymisjon og Kirkelig dialogsenter Drammen.', '12:00:00', '2019-09-13', 0, NULL, NULL, 0, 1, 5),
(7, 'Sammen for Norge', 'Sammen for Norge er et nytt dialogprosjekt for ungdom og unge voksne i regi av Forandringshuset med utgangspunkt i en metode fra konseptet «Tillsammans för Sverige» som Fryshuset i Sverge har gjennomført i en årrekke med stor suksess.\r\n\r\nGjennom dialogprosjekt og foredrag av ungdom med personlige fortellinger har Sammen for Norge som mål å motvirke radikalisering, xenofobi og fremmedfrykt. Vårt mål er å bygge forståelse og toleranse for det som er annerledes med et særlig fokus på religion og hvilken rolle religion spiller i samfunnet.\r\n\r\nDet blir en presentasjon fra dialogprest Maria Kjellsdotter-Rydinger som har vært med å utvikle konseptet i Sverige og Kim Andre Vian Bjerkestrand som er ansvarlig for lanseringen av konseptet i Norge.  \r\n\r\nMedvirkende:\r\nMaria Kjellsdotter Rydinger og Liam Sallamander (Fryshuset)\r\nKim Andre Vian Bjerkestrand (Forandringsuhset)\r\nRagnhild Laird Iversen (USN)\r\nIvar Flaten (Kirkelig Dialogsenter)', '09:00:00', '2018-09-14', 0, NULL, 'https://ticketmaster.com', 0, 1, 4),
(8, 'Yoga for hjertet', 'Velkommen til chanting av Mahamrityunjaya Mantra – et gammelt helende mantra og sang meditasjon. Lyd påvirker kropp og sinn og det bruker vi også i yoga for å roe ned, åpne opp og være tilstede her og nå.\r\n\r\nMax. 30 plasser.\r\n\r\nGratis, men legg gjerne igjen en donasjon.', '12:00:00', '2018-09-15', 0, NULL, 'https://ticketmaster.com', 0, 1, 2),
(9, 'Støttekonsert til TV-aksjon', 'TV-aksjonen NRK Kirkens Bymisjon skal skape et varmere og mer inkluderende samfunn.\r\n\r\nI Norge i dag er det altfor mange som står utenfor. Noen mangler en seng i sove i, andre har ingen å snakke med.\r\n\r\nÅrets TV-aksjon skal åpne dører og invitere flere inn i varmen. Fordi ett møte kan endre et liv – og flere møter kan endre et helt samfunn.\r\n\r\nPengene som samles inn skal gå til å skape 700.000 nye menneskemøter.', '13:00:00', '2018-09-16', 200, NULL, 'ticketmaster.com', 1, 1, 5),
(10, 'Guitar Man', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', '14:00:00', '2017-09-17', 50, NULL, NULL, 0, 1, 8),
(11, 'Dance dance', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', '09:00:00', '2017-09-12', 0, NULL, NULL, 1, 1, 2),
(12, 'Banjo man', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\r\n\r\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', '15:00:00', '2017-09-06', 100, NULL, NULL, 0, 1, 4),
(13, 'John Doe', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\r\n\r\n\r\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\r\n\r\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', '19:00:00', '2017-09-21', 200, NULL, NULL, 0, 1, 6),
(14, 'Tromme John', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', '15:00:00', '2017-08-13', 0, NULL, NULL, 0, 1, 2),
(15, 'Sing this', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', '18:00:00', '2016-08-13', 120, NULL, NULL, 0, 1, 8),
(16, 'Ballet', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\r\n\r\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inc', '18:00:00', '2016-09-06', 50, NULL, NULL, 0, 1, 5),
(17, 'Lorem ipsum ', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', '09:15:00', '2016-09-20', 0, NULL, NULL, 0, 1, 3);

-- --------------------------------------------------------

--
-- Tabellstruktur for tabell `festival_reports`
--

CREATE TABLE `festival_reports` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `language` enum('no','en') NOT NULL,
  `link` text
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dataark for tabell `festival_reports`
--

INSERT INTO `festival_reports` (`id`, `title`, `language`, `link`) VALUES
(1, 'festivalrapport 2012', 'no', 'http://w134760-www.php5.dittdomene.no/wp-content/uploads/2015/08/DSMF_12_rapport_lo2012.pdf'),
(2, 'festivalrapport 2013', 'no', 'http://w134760-www.php5.dittdomene.no/wp-content/uploads/2015/08/DSMF_Rapport_lo2013.pdf'),
(3, 'festival report 2013', 'en', 'http://w134760-www.php5.dittdomene.no/wp-content/uploads/2015/08/DSMF_Report_lo2013.pdf'),
(4, 'festivalrapport 2014', 'no', 'http://w134760-www.php5.dittdomene.no/wp-content/uploads/2015/08/DSMF_Rapport-final-31.10.14.pdf'),
(5, 'festivalrapport 2015', 'no', 'http://w134760-www.php5.dittdomene.no/wp-content/uploads/2015/06/DSMF-Report-2015.pdf'),
(6, 'festivalrapport 2016', 'no', 'http://www.drammensacred.no/wp-content/uploads/2015/06/DSMF_Rapport2016.pdf'),
(7, 'festivalrapport 2017', 'no', 'https://www.drammensacred.no/wp-content/uploads/2018/07/Rapport-DSMF-2017_norsk-1.pdf');

-- --------------------------------------------------------

--
-- Tabellstruktur for tabell `general`
--

CREATE TABLE `general` (
  `id` enum('1') COLLATE utf8_bin NOT NULL,
  `pitch` text COLLATE utf8_bin,
  `dateHeader_txt` varchar(50) COLLATE utf8_bin DEFAULT NULL,
  `inactiveHeader_txt` text COLLATE utf8_bin,
  `livestream_id` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `vision_txt` text COLLATE utf8_bin,
  `partner_txt_official` text COLLATE utf8_bin,
  `partner_txt_private` text COLLATE utf8_bin,
  `organization_txt` text COLLATE utf8_bin,
  `address` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `YouTube_API_KEY` varchar(500) COLLATE utf8_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dataark for tabell `general`
--

INSERT INTO `general` (`id`, `pitch`, `dateHeader_txt`, `inactiveHeader_txt`, `livestream_id`, `vision_txt`, `partner_txt_official`, `partner_txt_private`, `organization_txt`, `address`, `YouTube_API_KEY`) VALUES
('1', 'Drammen Sacred Music Festival bygger broer gjennom kulturopplevelser, hvor lokale, nasjonale og internasjonale aktører fyller programmet med kunst og musikk. Bli med og la deg berøre!', '15.-23. SEPTEMBER', 'Jeg veit ikke hva som skal inn her.', 'UCLA_DiR1FfKNvjuUpBHmylQ', 'Drammen Sacred Music Festival er et møtested for å dele musikk, bilder og fortellinger fra ulike tradisjoner. Vi tror musikk og kunst generelt kan uttrykke menneskets mest grunnleggende lengsler og overstige språklige, nasjonale, kulturelle, ideologiske, rasemessige og religiøse grenser. I konsertene presenterer vi lokale og gjestende artister som har noe viktig på hjertet. Seminarer, foredrag, filmer og workshops er rammen rundt refleksjon, dialog og læring.\r\n\r\nDrammen-området er kjent for sin internasjonale befolkning og festivalen legger stor vekt på dialog og å involvere ulike grupperinger i festivalen. Festivalens visjon er å legge til rette for møter som berører, beveger og skaper mening, og har ambisjon om å være en sentral festival i dette landskapet.', 'Festivalen kan gjennomføres på grunn av den støtten som gis fra en rekke offentlige instanser. De største er Drammen Kommune Interkultur, Norsk Kulturråd og Buskerud Fylkeskommune.', 'Like viktig er samarbeidet med lokale institusjoner for gjennomføring av de ulike arrangementene. Festivalen har siden starten vært knyttet til området ved Union og Papirbredden ved Ypsilon. Union Scene er en viktig samarbeidspartner.', 'Drammen og omegn tros- og livssynsforum (DoTL) startet festivalen i 2010 sammen med Drammen kommune, Interkultur. Initiativtakere og pådrivere var Arve Vannebo og Ricardo Sanchez (Drammen kommune Interkultur) og Ivar Flaten (sokneprest Fjell menighet). Fra 2012 har festivalen vært organisert som en forening der DoTL er representert i styret sammen med lokale, regionale og nasjonale samarbeidspartnere. Drammen kommune er en sentral samarbeidspartner i programmering og produksjon.\r\n\r\nStyret for DSMF består av Sharee Loren, Tal Coleman, Terje-Brun Pedersen, Ingvild Jacobsen, Reidun Svabø og Ivar Flaten som er styreleder.\r\n\r\nFestivalen har gjennom årene hatt samarbeid med fagpersoner i programarbeidet: Ricardo Sanchez (tidl. produsent Interkultur)Jørgen Nøvik (musiker, billedkunstner m.m),  Svanhild Rohdin (billedkunstner), Fernando Sallum (musiker), Tal Zimra Coleman (musiker), Svein Westad (musiker), Erik Hillestad (Kirkelig Kulturverksted) og Ingebrigt Håker Flaten (musiker). Henrik Melius (Spiritus Mundi, Malmø) og Eli Borchgrevink (Buskerud teaterverksted – tidligere Trap- og Du Store Verden) er eksterne konsulenter og samarbeidspartnere.', 'Drammen Sacred Music Festival, c/o DOTL, Solsvingen 90, Fjell kirke, 3034, DRAMMEN', 'AIzaSyDgh0qAGY0pn7fOQ3TnJW0XHeKtLjNcRHU');

-- --------------------------------------------------------

--
-- Tabellstruktur for tabell `images`
--

CREATE TABLE `images` (
  `id` int(11) NOT NULL,
  `title` varchar(50) COLLATE utf8_bin DEFAULT NULL,
  `caption` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `r_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dataark for tabell `images`
--

INSERT INTO `images` (`id`, `title`, `caption`, `r_id`) VALUES
(1, 'Lorem ipsum dolor', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut', 1),
(2, 'Lorem ipsum ', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore', 1),
(3, 'Lorem ipsum dolor ', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore', 1),
(4, 'Lorem ', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore', 2),
(5, 'Lorem ip', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore', 2),
(6, 'Lorem i', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore', 2);

-- --------------------------------------------------------

--
-- Tabellstruktur for tabell `partners`
--

CREATE TABLE `partners` (
  `id` int(11) NOT NULL,
  `type` enum('official','private') COLLATE utf8_bin NOT NULL,
  `partner_name` varchar(50) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dataark for tabell `partners`
--

INSERT INTO `partners` (`id`, `type`, `partner_name`) VALUES
(1, 'official', 'Drammen kommune Interkultur'),
(2, 'official', 'Norsk Kulturråd'),
(3, 'official', 'Drammen prosti / Fjell menighet'),
(4, 'official', 'Buskerud fylkeskommune'),
(5, 'official', 'Kulturdepartementet'),
(6, 'official', 'Tunsberg bispedømmekontor'),
(7, 'official', 'Drammen kirkelige fellesråd'),
(8, 'official', 'Kari Ulleberg'),
(9, 'private', 'Drammen kommune Interkultur'),
(10, 'private', 'Papirbredden AS'),
(11, 'private', 'Comfort Hotel Union Brygge'),
(12, 'private', 'Drammen Filmklubb'),
(13, 'private', 'Mangfoldhuset, Drammen'),
(14, 'private', 'Drammen og omegn tros- og livssynsforum (DoTL)'),
(15, 'private', 'Introduksjonssenteret'),
(16, 'private', 'Biblioteket i Drammen'),
(17, 'private', 'Tunsberg bispedømmeråd'),
(18, 'private', 'Drammen kirkelige fellesråd'),
(19, 'private', 'Fjell menighetsråd'),
(20, 'private', 'Strømsø menighetsråd'),
(21, 'private', 'Strømsgodset menighetsråd'),
(22, 'private', 'Bragernes menighetsråd'),
(23, 'private', 'Byen vår Drammen'),
(24, 'private', 'Buskerud Innvandrerråd'),
(25, 'private', 'Byavisa Drammen');

-- --------------------------------------------------------

--
-- Tabellstruktur for tabell `posts`
--

CREATE TABLE `posts` (
  `id` int(11) NOT NULL,
  `title` varchar(50) COLLATE utf8_bin NOT NULL,
  `text` text COLLATE utf8_bin NOT NULL,
  `date` date DEFAULT NULL,
  `u_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dataark for tabell `posts`
--

INSERT INTO `posts` (`id`, `title`, `text`, `date`, `u_id`) VALUES
(1, 'Første artist slippes til årets festivalprogram!', 'Bedre budbringer enn Solveig Slettahjell er ikke mulig å finne når man skal formidle et budskap med dybde.\r\n\r\nDen internasjonalt anerkjente artisten har i mange år begeistret sitt publikum med inderlige framføringer av både egne og andres låter. Det skal borge for en helt spesiell opplevelse i Filadelfiakirken, som for anledningen er gjort om til en spennende konsertsal med topp lys- og lydproduksjon.\r\n\r\nPlaten «Poetisk tale» inneholder nyskrevet musikk og eksistensielle dikt av noen av Norges mest kjente diktere, bl.a. Jon Fosse og Gunvor Hofmo. Bli med i en lydlandskap med en høyde og dybde du knapt har hørt, med tekster og musikalske uttrykk som gjør alle sjangerbetegnelser irrelevante!\r\n\r\nDen nylig avgåtte biskopen, Per Arne Dahl, komponisten Øyvind Varkøy og Solveig Slettahjell vil før konserten snakke litt om bakgrunnen for platen.', '2018-08-14', 1),
(2, 'Flammedans i skumringen lørdag kveld', 'Det ble en spektakulær åpning av årets Drammen Sacred Music Festival da gruppa Cloudlight Fire Tribe med dj og 5 flammesjonglører holdt sitt fantastiske show på Strømsø torg lørdag kveld.\r\n\r\nFestivalens styreleder Ivar Flaten ønsket velkommen til festivalen, som har program hver dag gjennom hele uka fram til avslutningskonsert med Solveig Sletthjell i Filadelfiakirken søndag 23. september.\r\n\r\nStor og små flokket seg rundt på torget mens performance-kunstnerene fra Cloudlight danset og sjonglerte med ulike typer fakler til dj´ens egenproduserte tribal beats.', '2018-09-16', 1),
(3, 'Velkommen til Drammen Sacred Music Festival ', 'Festivalen feirer mangfoldet i byen og er med på å bygge broer mellom mennesker gjennom kulturmøter.\r\n\r\nI tillegg til vårt tradisjonelle program, inviterer vi for første gang til huskonserter i serien Open Living Room. Slik kommer vi enda tettere på artistene og hverandre. Vi håper på møter som inspirerer, berører og skaper mening.\r\n\r\nVi er stolte av våre samarbeidspartnere, blant andre Interkultur Drammen og Globus, som til sammen gir oss en hel uke med feiring av den internasjonale byen.\r\n\r\nVelkommen!', '2018-08-28', 1),
(4, 'Konserten nærmer seg!', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\r\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', '2018-09-15', 1),
(5, 'Samtale med Geir', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\r\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', '2018-08-13', 1),
(6, 'Kirke tid', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', '2018-09-21', 1),
(7, 'Takk for nå', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\r\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\r\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', '2018-09-30', 1),
(8, 'Drammen Sacred', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\r\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', '2017-09-12', 1),
(9, 'Fantastisk konsert!', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', '2017-09-13', 1),
(10, 'Fint kor', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\r\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', '2017-09-11', 1),
(11, 'Nydelig konsertopplevelse', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\r\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', '2017-08-20', 1),
(12, 'Qawali-gruppen Shabbaz og Fayyaz Hussain', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\r\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', '2016-08-05', 1),
(13, 'SVETOGLAS', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum\r\n\r\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', '2016-09-06', 1),
(14, 'Drammen Sacred', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum\r\n\r\n\r\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum\r\n\r\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', '2016-07-13', 1);

-- --------------------------------------------------------

--
-- Tabellstruktur for tabell `review`
--

CREATE TABLE `review` (
  `id` int(11) NOT NULL,
  `year` smallint(6) NOT NULL,
  `text` text COLLATE utf8_bin
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dataark for tabell `review`
--

INSERT INTO `review` (`id`, `year`, `text`) VALUES
(1, 2016, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\r\n\r\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'),
(2, 2017, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\r\n\r\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');

-- --------------------------------------------------------

--
-- Tabellstruktur for tabell `status`
--

CREATE TABLE `status` (
  `id` enum('1') COLLATE utf8_bin NOT NULL,
  `anniversary` enum('off','on') COLLATE utf8_bin DEFAULT NULL,
  `status` enum('active','inactive') COLLATE utf8_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dataark for tabell `status`
--

INSERT INTO `status` (`id`, `anniversary`, `status`) VALUES
('1', 'off', 'active');

-- --------------------------------------------------------

--
-- Tabellstruktur for tabell `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(50) COLLATE utf8_bin NOT NULL,
  `email` varchar(50) COLLATE utf8_bin NOT NULL,
  `password` varchar(255) COLLATE utf8_bin NOT NULL,
  `type` enum('admin','publisher') COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dataark for tabell `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `type`) VALUES
(1, 'Admin', 'admin@ntnu.no', '$2a$10$Hs3nkUWSR37Jd/jy5EFP7.6MXYvn1Iy98XnDlZ20sOJn..eH9BUoO', 'admin'),
(2, 'publisher', 'publisher@ntnu.no', '$2a$10$nxu.DvUW91RKo8rx27oAneXLYq1lRk8MPBGm2FiTMeg7xCN0bKgGi', 'publisher'),
(9, 'testeeeeee', 'ffff@hhh.no', '$2a$10$EDfa2/CMWs9M6d4oTX3lTeWaivRC/FyQSVtTIjaFiaFqcIAJ2bMj2', 'publisher'),
(10, 'Jallakkkkf', 'dddd@fff.bg', '$2a$10$8BMI0GQbgNWMOReCoCYdWuo8ccPK/d2TXgJ7r7FX3Cys7Q8QCHpWW', 'admin');

-- --------------------------------------------------------

--
-- Tabellstruktur for tabell `venues`
--

CREATE TABLE `venues` (
  `id` int(11) NOT NULL,
  `address` varchar(255) COLLATE utf8_bin NOT NULL,
  `capacity` smallint(6) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dataark for tabell `venues`
--

INSERT INTO `venues` (`id`, `address`, `capacity`) VALUES
(1, 'Hjemme hos Kim og Ann Magritt: Muusøya 6, 3023 Drammen', 50),
(2, 'Nedre Storgate 13', NULL),
(3, 'Strømsø torg', NULL),
(4, 'Drammensbiblioteket', 60),
(5, 'Fjell kirke', 300),
(6, ' Union Scene, Multisal 1', 200),
(7, 'Filadelfia', NULL),
(8, 'Hovedscenen, Union Scene', 1000),
(9, 'ates', 123),
(10, 'bla', 1230),
(11, 'dfgh', 67),
(12, 'ttt', 444);

-- --------------------------------------------------------

--
-- Tabellstruktur for tabell `video_links`
--

CREATE TABLE `video_links` (
  `id` int(11) NOT NULL,
  `link` text COLLATE utf8_bin NOT NULL,
  `name` varchar(50) COLLATE utf8_bin NOT NULL,
  `r_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dataark for tabell `video_links`
--

INSERT INTO `video_links` (`id`, `link`, `name`, `r_id`) VALUES
(1, 'https://www.youtube.com/watch?v=TKHLf6d9x-w', 'video name 1', 1),
(2, 'https://www.youtube.com/watch?v=TKHLf6d9x-w', 'video name 2', 1),
(3, 'https://www.youtube.com/watch?v=TKHLf6d9x-w', 'video name 3', 1),
(4, 'https://www.youtube.com/watch?v=TKHLf6d9x-w', 'video name 1', 2),
(5, 'https://www.youtube.com/watch?v=TKHLf6d9x-w', 'video name 2', 2),
(6, 'https://www.youtube.com/watch?v=TKHLf6d9x-w', 'video name 3', 2),
(7, 'https://www.youtube.com/watch?v=TKHLf6d9x-w', 'video name 4', 1),
(8, 'https://medium.com/@Keithweaver_/building-a-log-in-system-for-a-mern-stack-39411e9513bd', 'hallo', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `contact_persons`
--
ALTER TABLE `contact_persons`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `events`
--
ALTER TABLE `events`
  ADD PRIMARY KEY (`id`),
  ADD KEY `events_ibfk_1` (`u_id`),
  ADD KEY `events_ibfk_2` (`v_id`);

--
-- Indexes for table `festival_reports`
--
ALTER TABLE `festival_reports`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `general`
--
ALTER TABLE `general`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `images`
--
ALTER TABLE `images`
  ADD PRIMARY KEY (`id`),
  ADD KEY `r_id` (`r_id`);

--
-- Indexes for table `partners`
--
ALTER TABLE `partners`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `posts_ibfk_1` (`u_id`);

--
-- Indexes for table `review`
--
ALTER TABLE `review`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `year` (`year`);

--
-- Indexes for table `status`
--
ALTER TABLE `status`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `venues`
--
ALTER TABLE `venues`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `video_links`
--
ALTER TABLE `video_links`
  ADD PRIMARY KEY (`id`),
  ADD KEY `r_id` (`r_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `contact_persons`
--
ALTER TABLE `contact_persons`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `events`
--
ALTER TABLE `events`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `festival_reports`
--
ALTER TABLE `festival_reports`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `images`
--
ALTER TABLE `images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `partners`
--
ALTER TABLE `partners`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `review`
--
ALTER TABLE `review`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `venues`
--
ALTER TABLE `venues`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `video_links`
--
ALTER TABLE `video_links`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Begrensninger for dumpede tabeller
--

--
-- Begrensninger for tabell `events`
--
ALTER TABLE `events`
  ADD CONSTRAINT `events_ibfk_1` FOREIGN KEY (`u_id`) REFERENCES `users` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `events_ibfk_2` FOREIGN KEY (`v_id`) REFERENCES `venues` (`id`) ON DELETE SET NULL;

--
-- Begrensninger for tabell `images`
--
ALTER TABLE `images`
  ADD CONSTRAINT `images_ibfk_1` FOREIGN KEY (`r_id`) REFERENCES `review` (`id`);

--
-- Begrensninger for tabell `posts`
--
ALTER TABLE `posts`
  ADD CONSTRAINT `posts_ibfk_1` FOREIGN KEY (`u_id`) REFERENCES `users` (`id`) ON DELETE SET NULL;

--
-- Begrensninger for tabell `video_links`
--
ALTER TABLE `video_links`
  ADD CONSTRAINT `video_links_ibfk_1` FOREIGN KEY (`r_id`) REFERENCES `review` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
