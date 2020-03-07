module.exports = function(sequelize, DataTypes) {
    const Artwork = sequelize.define("Artwork", {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 150]
        }
      },
      picture: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      artist: {
        type: DataTypes.STRING,
        validate: {
          len: [1, 140]
        }
      },
      book: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 140]
        }
      },
      chapter: {
          type: DataTypes.INTEGER,
          allowNull: false,
          validate: {
              min: 1,
              max: 50,
          }
      },
      verse: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
      matureContent: {
        type: DataTypes.BOOLEAN,
        default: false
    },
    upvotes: {
        type: DataTypes.INTEGER,
        default: 0
    },
    createdAt: {
      type:DataTypes.DATE(3),
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP(3)')
    },
    updatedAt: {
      type:DataTypes.DATE(3),
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3)')
    }
});
    return Artwork;
  };

  INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("The Creation of the Animals","https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Betram%20of%20Minden%20The%20Creation%20of%20the%20Animals%20Genesis%201%2020.jpg",
  "betram of minden","genesis",1,20);
  
  INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("The Creation of the Animals","https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Il%20Tintoretto%20The%20Creation%20of%20the%20Animals%20Genesis%201%2020.jpg",
  "il tintoretto","genesis",1,20);
  
  INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("The Creation of Adam", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Michelangelo%20Buonarroti%20The%20Creation%20of%20Adam%20Genesis%201%2027.jpg", "michelangelo buonarroti", "genesis", 1, 27);
  
  INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("The Separation of Land and Water", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Michelangelo%20Buonarroti%20The%20Separation%20of%20Land%20and%20Water%20Genesis%201%2010.jpg", "michelangelo buonarroti", "genesis", 1, 10);
  
  INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("The Creation of Eve", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Betram%20of%20Minden%20The%20Creation%20of%20Eve%20Genesis%202%2021.jpg", "betram of minden", "genesis", 2, 21);
  
  INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("Paradise", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Fra%20Angelico%20Paradise%20Genesis%202%2025.jpg", "fra angelico", "genesis", 2, 25);
  
  INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("Paradise", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Jan%20Brueghel%20the%20Elder%20Paradise%20Genesis%202%2025.jpg", "jan brueghel the elder", "genesis", 2, 25);
  
  INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("Paradise", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Lucas%20Cranach%20the%20Elde%20Paradise%20Genesis%202%2025.jpg", "lucas cranach the elder", "genesis", 2, 25);
  
  INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("Genesis", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Michelangelo%20Buonarroti%20Genesis%202%204.jpg", "michelangelo", "genesis", 2, 4);
  
  INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("The Creation of Eve", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Lucas%20van%20Leyden%20The%20Creation%20of%20Eve%20Genesis%202%2021.jpg", "lucas van leyden", "genesis", 2, 21);
  
  INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("The Creation of Eve", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Michelangelo%20Buonarroti%20The%20Creation%20of%20Eve%20Genesis%202%2021.jpg", "michelangelo", "genesis", 2, 21);
  
  INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("Adam and Eve", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Albrecht%20Durer%20Adam%20and%20Even%20Genesis%203%206.jpg", "albrecht durer", "genesis", 3, 6);
  
  INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("Adam and Eve Driven Out of Eden", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Gustave%20Dore%20Adam%20and%20Even%20Driven%20Out%20of%20Eden%20Genesis%203%2024.jpg", "gustave dore", "genesis", 3, 24);
  
  INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("Adam and Eve", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Hans%20Holbein%20the%20Younger%20Adam%20and%20Eve%20Genesis%203%2012.jpg", "hans holbein", "genesis", 3, 12);
  
  INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("Paradise and the Fall", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Jan%20Brueghel%20the%20Elder%20Paradise%20and%20the%20Fall%20Genesis%203%206.jpg", "jan brueghel the elder", "genesis", 3, 6);
  
  INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("Adam and Eve 1526", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Lucas%20Cranach%20the%20Elder%20Adam%20and%20Eve%201526%20Genesis%203%206.jpg", "lucas cranach the elder", "genesis", 3, 6);
  
  INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("Adam and Eve", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Lucas%20Cranach%20the%20Elder%20Adam%20and%20Eve%20Genesis%203%206.jpg", "lucas cranach", "genesis", 3, 6);
  
  INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("The Expulsion from Paradise", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Lucas%20van%20Leyden%20The%20Expulsion%20from%20Paradise%20Genesis%203%2024.jpg", "lucas van leyden", "genesis", 3, 24);
  
  INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("The Fall", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Lucas%20van%20Leyden%20The%20Fall%20Genesis%203%206.jpg", "lucas van leyden", "genesis", 3, 6);
  
  INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("The Expulsion from Paradise", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Michelangelo%20Buonarroti%20The%20Expulsion%20from%20Paradise%20Genesis%203%2024.jpg", "michelangelo", "genesis", 3, 24);
  
  INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("The Fall", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Michelangelo%20Buonarroti%20The%20Fall%20Genesis%203%206.jpg", "michelangelo", "genesis", 3, 6);
  
  INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("The Expulsion from Paradise", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Michiel%20Coxcie%20The%20Expulsion%20from%20Paradise%20Genesis%203%2024.jpg", "michiel coxcie", "genesis", 3, 24);
  
  INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("The Fall", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Michiel%20Coxcie%20The%20Fall%20Genesis%203%206.jpg", "michiel coxcie", "genesis", 3, 6);
  
  INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("Cain and Abel Bring Offerings", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Betram%20of%20Minden%20Cain%20and%20Abel%20Bring%20Offerings%20Genesis%204%203.jpg", "betram of minden", "genesis", 4, 3);
  
  INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("Cain and Abel", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Il%20Tintoretto%20Cain%20and%20Abel%20Genesis%204%208.jpg", "il tintoretto", "genesis", 4, 8);
  
  INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("Cain Kills Abel", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Jan%20Lievens%20Cain%20Kills%20Abel%20Genesis%204%208.jpg", "jan lievens", "genesis", 4, 8);
  
  INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("The Death of Abel", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Michiel%20Coxcie%20The%20Death%20of%20Abel%20Genesis%204%2013.jpg", "michel coxcie", "genesis", 4, 13);
  
  INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("The Lamenttion of Abel", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Pieter%20Lastman%20The%20Lamentation%20of%20Abel%20Genesis%204%2013.jpg", "pieter lastman", "genesis", 4, 13);
  
  INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("Cain and Abel", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Titian%20Cain%20and%20Abel%20Genesis%204%208.jpg", "titian", "genesis", 4, 8);
  
  INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("Unknown", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Gen%205%2024.jpg", "pinterest", "genesis", 5, 24);
  
  INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("Genesis", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Betram%20of%20Minden%20Genesis%206%2014.jpg", "betram of minden", "genesis", 6, 14);
  
  INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("The Animals Board Noah's Ark", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Jan%20Brueghel%20the%20Elder%20The%20Animals%20Board%20Noah's%20Ark%20Genesis%207%209.jpg", "jan brueghel", "genesis", 7, 9);
  
  INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("The Deluge", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/JMW%20Turner%20The%20Deluge%20Genesis%207%2020.jpg", "jmw turner", "genesis", 7, 20);
  
  INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("The Flood", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Johann%20Heinrich%20Schonfeld%20The%20Flood%20Genesis%207%2020.jpg", "johann heinrich schonfeld", "genesis", 7, 20);
  
  INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("The Flood", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Michelangelo%20Buonarroti%20The%20Flood%20Genesis%207%2017.jpg", "michelangelo", "genesis", 7, 17);
  
  INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("Genesis", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Michelangelo%20Buonarroti%20Genesis%208%2020.jpg", "michelangeo", "genesis", 8, 20);
  
  INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("Noah Curses Canaan", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Gustave%20Dore%20Noah%20Curses%20Canaan%20Genesis%209%2025.jpg", "gustave dore", "genesis", 9, 25);
  
  INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("Genesis", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Michelangelo%20Buonarroti%20Genesis%209%2021.jpg", "michelangelo", "genesis", 9, 21);
  
  INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("The Confusion of Tongues", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Gustave%20Dore%20The%20Confusion%20of%20Tongues%20Genesis%2011%204.jpg", "gustave dore", "genesis", 11, 4);
  
  INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("The Tower of Babel", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Pieter%20Bruegel%20the%20Elder%20The%20Tower%20of%20Babel%20Genesis%2011%204.jpg", "pieter bruegel", "genesis", 11, 4);
  
  INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("The Tower of Babel Vienna", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Pieter%20Bruegel%20the%20Elder%20The%20Tower%20of%20Babel%20Vienna%20Genesis%2011%204.jpg", "pieter bruegel the elder", "genesis", 11, 4);
  
  INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("Abraham on the Way to Canaan", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Pieter%20Lastman%20Abraham%20on%20the%20Way%20to%20Canaan%20Genesis%2012%207.jpg", "pieter lastman", "genesis", 12, 7);
  
  INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("Unknown", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Abraham%20and%20Lot%20Separate%20Ways.jpg", "unknown", "genesis", 13, 1);
  
  INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("The Sacrifice of Melchizedek", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Giovan%20Battista%20Tiepolo%20The%20Sacrifice%20of%20Melchizedek%20Genesis%2014%2018.jpg", "giovan battista tiepolo", "genesis", 14, 18);
  
  INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("Abraham Meets Melchizedek", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Peter%20Paul%20Rubens%20Abraham%20Meets%20Melchizedek%20Genesis%2014%2018.jpg", "peter paul rubens", "genesis", 14, 18);
  
  INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("Genesis 15", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Gen%2015%20by%20Creative%20Commons%20Prayer.jpg", "creative commons prayer", "genesis", 15, 1);
  
  INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("Abraham", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/abraham+copy.jpg", "unknown", "genesis", 16, 1);
  
  INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("Genesis 16", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Peter%20Paul%20Rubens%20Genesis%2016%206.jpg", "peter paul rubens", "genesis", 16, 6);
  
  INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("Sarah, Abraham, and Hagar", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Sarah_Abraham_Hagar.jpg", "unknown", "genesis", 16, 1);
  
  INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("Moses Leading the Israelites out of Egypt 1861", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Molnár_Moses_leading_the_Israelites_out_of_Egypt_1861.jpg", "molnar", "genesis", 17, 1);
  
  INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("God and the Angels Visit Abraham", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Arent%20de%20Gelder%20God%20and%20the%20angels%20visit%20Abraham%20Genesis%2018%2010.jpg", "arent de gelder", "genesis", 18, 10);
  
  INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("Genesis 18", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Gen%2018%20by%20Peter%20Hui.jpg", "peter hui", "genesis", 18, 1);
  
  INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("The Angels Appear to Abraham", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Giovan%20Battista%20Tiepolo%20The%20Angels%20Appear%20to%20Abraham%20Genesis%2018%202.jpg", "giovan battista", "genesis", 18, 2);
  
  INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("Lot and Lot's Wife", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Lot%20and%20Lots%20Wife%20Genesis%2018%20or%2019.jpg", "unknown", "genesis", 18, 1);
  
  INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("Lot and Lot's Wife", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Lot%20and%20Lots%20Wife%20Genesis%2018%20or%2019.jpg", "unknown", "genesis", 19, 1);
  
  INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("Abraham and the Three Angels", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Lucas%20van%20Leyden%20Abraham%20and%20the%20Three%20Angels%20Genesis%2018%202.jpg", "lucas van leyden", "genesis", 18, 2);
  
  INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("Lot and his Family Flee from Sodom", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Albrecht%20Durer%20Lot%20and%20his%20family%20flee%20from%20Sodom%20Genesis%2019%2024.jpg", "albrecht durer", "genesis", 19, 24);
  
  INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("Lot and His Daughters", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Artemisia%20Gentileschi%20Lot%20and%20His%20Daughters%20Genesis%2019%2032.jpg", "artemisia gentileschi", "genesis", 19, 32);
  
  INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("Lot and his Daughters", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Il%20Guercino%20Lot%20and%20his%20Daughters%20Genesis%2019%2032.jpg", "il guercino", "genesis", 19, 32);
  
  INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("Lot and his Daughters", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Lucas%20van%20Leyden%20Lot%20and%20His%20Daughters%20Genesis%2019%2032.jpg", "lucas van leyden", "genesis", 19, 32);
  
  INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("Lot and His Daughters Print", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Lucas%20van%20Leyden%20Lot%20and%20HIs%20Daughters%20Print%20Genesis%2019%2032.jpg", "lucas van leyden", "genesis", 19, 32);
  
  INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("Abimelech Restores Sarah", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/The_Phillip_Medhurst_Picture_Torah_106,_Abimelech_restores_Sarah._Genesis_cap_20_v_14._Caspar_Luyken.jpg", "caspar luyken", "genesis", 20, 14);
  
  INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("Harard in the Desert", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Giovan%20Battista%20Tiepolo%20Hagard%20in%20the%20Desert%20Genesis%2021%2017.jpg", "giovan battista tiepolo", "genesis", 21, 17);
  
  INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("The Angel Appears to Sarah", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Giovan%20Battista%20Tiepolo%20The%20Angel%20Appears%20to%20Sarah%20Genesis%2021%201.jpg", "giovan battista tiepolo", "genesis", 21, 1);
  
  INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("The Dismissal of Hagar", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Govert%20Flinck%20The%20Dismissal%20of%20Hagar%20Genesis%2021%2014.jpg", "govert flinck", "genesis", 21, 14);
  
  INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("Abraham Casting out Hagar and Ishmael", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Il%20Guercino%20Abraham%20Casting%20out%20Hagar%20and%20Ishmael%20Genesis%2021%2014.jpg", "il guercino", "genesis", 21, 14);
  
  INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("Abraham Casting out Hagar and Ishmael", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Pieter%20Lastman%20Abraham%20Casting%20Out%20Hagar%20and%20Ishmael%20Genesis%2021%2014.jpg", "pieter lastman", "genesis", 21, 14);
  
  INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("The Sacrifice of Isaac 1605", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Caravaggio%20The%20Sacrifice%20of%20Isaac%201605%20Genesis%2022%2010.jpg", "caravaggio", "genesis", 22, 10);
  
  INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("The Sacrifice of Isaac", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Caravaggio%20The%20Sacrifice%20of%20Isaac%20Genesis%2022%2010.jpg", "caravaggio", "genesis", 22, 10);
  
  INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("The Sacrifice of Isaac", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Giovan%20Battista%20Tiepolo%20The%20Sacrifice%20of%20Isaac%20Genesis%2022%2010.jpg", "giovan battista tiepolo", "genesis", 22, 10);
  
  INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("Abraham and Isaac", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Jan%20Lievens%20Abraham%20and%20Isaac%20Genesis%2022%2015.jpg", "jan lievens", "genesis", 22, 15);
  
  INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("Abraham and Isaac", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Rembrandt%20Abraham%20and%20Isaac%20Genesis%2022%207.jpg", "rembrandt", "genesis", 22, 7);
  
  INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("The Angel Prevents the Sacrifice of Isaac", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Rembrandt%20The%20Angel%20Prevents%20the%20Sacrifice%20of%20Isaac%20Genesis%2022%2010.jpg", "rembrandt", "genesis", 22, 10);
  
  INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("Abraham and Isaac", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Titian%20Abraham%20and%20Isaac%20Genesis%2022%2010.jpg", "titian", "genesis", 22, 10);
  
  INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("Isaac Meets Rebekah", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Arent%20de%20Gelder%20Isaac%20meets%20Rebekah%20Genesis%2024%2066.jpg", "arent de gelder", "genesis", 24, 66);
  
  INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("Rebecca and Eliezer at the Well", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Ferdinand%20Bol%20Rebecca%20and%20Eliezer%20at%20the%20Well%20Genesis%2024%2018.jpg", "ferdinand bol", "genesis", 24, 18);
  
  INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("Seeking and Finding", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Gen%2024%20Seeking%20and%20Finding.jpg", "unknown", "genesis", 24, 1);
  
  INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("Rebecca and Eliezer at the Well", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Salomon%20de%20Bray%20Rebecca%20and%20Eliezer%20at%20the%20Well%20Genesis%2024%2018.jpg", "salomon de bray", "genesis", 24, 18);
  
  INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("Isaac and Rebecca Spied Upon by Abimelech", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Raphael%20Isaac%20and%20Rebecca%20Spied%20Upon%20by%20Abimelech%20Genesis%2026%208.jpg", "raphael", "genesis", 26, 8);
  
  INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("The Jewish Bride", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Rembrandt%20The%20Jewish%20Bride%20Genesis%2026%208.jpg", "rembrandt", "genesis", 26, 8);
  
  INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("Isaac asks Esau to Hunt for Venison", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Betram%20of%20Minden%20Isaac%20asks%20Esau%20to%20Hunt%20for%20Venison%20Genesis%2027%203.jpg", "betram of minden", "genesis", 27, 3);
  
  INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("Isaac Blesses Jacob", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Govert%20Flinck%20Isaac%20Blesses%20Jacob%20Genesis%2027%2023.jpg", "govert flinck", "genesis", 27, 23);
  
  INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("Isaac Blesses Jacob Ultrecht", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Govert%20Flinck%20Isaac%20Blesses%20Jacob%20Utrecht%20Genesis%2027%2023.jpg", "govert flinck", "genesis", 27, 23);
  
  INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("Jacob's Dream", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Ferdinand%20Bol%20Jacob's%20Dream%20Genesis%2028%2012.jpg", "ferdinand bol", "genesis", 28, 12);
  
  INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("Jacob's Dream", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Giovan%20Battista%20Tiepolo%20Jacob's%20Dream%20Genesis%2028%2012.jpg", "giovan battista tiepolo", "genesis", 28, 12);
  
  INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("Jakob", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/dore-jakob-engel_grt%20%20Gen%2031%20or%2032.jpg", "gustave dore", "genesis", 31, 1);
  
  INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("Jakob", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/dore-jakob-engel_grt%20%20Gen%2031%20or%2032.jpg", "gustave dore", "genesis", 32, 1);
  
  INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("Rachel Hides Her Father's Idols", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Giovan%20Battista%20Tiepolo%20Rachel%20Hides%20Her%20Father's%20Idols%20Genesis%2031%2035.jpg", "giovan battista tiepolo", "genesis", 31, 35);
  
  INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("Jacob Persuades Lean and Rachel to Flee", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Pieter%20Potter%20Jacob%20Persuades%20Leah%20and%20Rachel%20to%20Flee%20Genesis%2031%205.jpg", "pieter potter", "genesis", 31, 5);
  
  INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("Jacob Wrestling with the Angel", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Ba%20rtholomeus%20Breenbergh%20JacobWrestling%20with%20the%20Angel%20Genesis%2032%2024.jpg", "bartholomeus breenbergh", "genesis", 32, 24);
  
  INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("Jacob Wrestling with the Angel", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Eugene%20Delacroix%20Jacob%20Wrestling%20with%20the%20angel%20Genesis%2032%2024.jpg", "eugene delacroix", "genesis", 32, 24);
  
  INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("Genesis", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Gustave%20Dore%20Genesis%2032%2024.jpg", "gustave dore", "genesis", 32, 24);
  
  INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("Vision after the Sermon", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Paul%20Gauguin%20Vision%20after%20the%20sermon%20Genesis%2032%2024.jpg", "paul gauguin", "genesis", 32, 24);
  
  INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("Jacob Wrestling with the Angel", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Rembrandt%20Jacob%20Wrestling%20with%20the%20Angel%20Genesis%2032%2024.jpg", "rembrandt", "genesis", 32, 24);
  
  INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("Joseph Tells his Dreams to Jacob", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Lucas%20van%20Leyden%20Joseph%20Tells%20His%20Dreams%20to%20Jacob%20Genesis%2037%2010.jpg", "lucas van leyden", "genesis", 37, 10);
  
  INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("Judah and Tamar", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Arent%20de%20Gelder%20Judah%20and%20Tamar%20Genesis%2038%2016.jpg", "arent de gelder", "genesis", 38, 16);
  
  INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("Judah and Tamar -", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Arent%20de%20Gelder%20Judan%20and%20Tamar%20Genesis%2038%2016.jpg", "arent de gelder", "genesis", 38, 16);
  
  INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("Joseph Accused by Potiphar's Wife", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Rembrandt%20Joseph%20Accused%20by%20Potiphar's%20Wife%20Genesis%2039%2017.jpg", "rembrandt", "genesis", 39, 17);
  
  INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("Joseph the Butler adn the Baker", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Alexander%20Ivanov%20Joseph%20the%20Butler%20and%20the%20Baker%20Genesis%2040%208.jpg", "alexander ivanov", "genesis", 40, 8);
  
  INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("Joseph the Butler and the Baker", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Benjamin%20Gerritsz%20Cuyp%20Joseph%20the%20Butler%20and%20the%20Baker%20Genesis%2040%2019.jpg", "benjamin gerritsz cuyp", "genesis", 40, 19);
  
  INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("Pharaoh Gives His Ring to Joseph", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Giovan Battista Tiepolo Pharaoh Gives His Ring to Joseph Genesis 41 42.jpg", "giovan battista tiepolo", "genesis", 41, 42);
  
  INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("Joseph before Pharaoh", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Lucas%20van%20Leyden%20Joseph%20before%20Pharaoh%20Genesis%2041%2025.jpg", "lucas van leyden", "genesis", 41, 25);
  
  INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("Joseph Distributing Corn in Egypt", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Bartholomeus%20Breenbergh%20Joseph%20Distributing%20Corn%20in%20Egypt%20Genesis%2042%206.jpg", "bartholomeus breenbergh", "genesis", 42, 6);
  
  INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("Joseph and Judah with the Cup", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Arent%20de%20Gelder%20Joseph%20and%20Judah%20with%20the%20Cup%20Genesis%2044%2018.jpg", "arendt de gelder", "genesis", 44, 18);
  
  INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("Judah and Joseph", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Arent%20de%20Gelder%20Judah%20and%20Joseph%20Genesis%2044%2018.jpg", "arendt de gelder", "genesis", 44, 18);
  
  INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("Blessing the Children of Joseph", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Rembrandt%20Jacob%20Blessing%20the%20Children%20of%20Joseph%20Genesis%2048%2014.jpg", "rembrandt", "genesis", 48, 14);
  
  INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("Cain Flees", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/William%20Blake%20Cain%20Flees.jpg", "william blake", "genesis", 4, 1);
  
  INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("Joseph's  Brothers Find the Silver Goblet in Benjamin's Sack", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject%20Alexander%20Ivanov%20Joseph's%20Brothers%20Find%20the%20Silver%20Goblet%20in%20Benjamin's%20Sack%20Genesis%2044%2012.jpg", "alexander ivanov", "genesis", 44, 12);