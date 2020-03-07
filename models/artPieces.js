module.exports = function(sequelize, DataTypes) {
    const Artwork = sequelize.define("Artwork", {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 140]
        }
      },
      picture: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isUrl: true
        }
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

  INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("The Creation of the Animals","https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Betram of Minden The Creation of the Animals Genesis 1 20.jpg",
"betram of minden","genesis",1,20);

INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("The Creation of the Animals","https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Il Tintoretto The Creation of the Animals Genesis 1 20.jpg",
"il tintoretto","genesis",1,20);

INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("The Creation of Adam", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Michelangelo Buonarroti The Creation of Adam Genesis 1 27.jpg", "michelangelo buonarroti", "genesis", 1, 27);

INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("The Separation of Land and Water", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Michelangelo Buonarroti The Separation of Land and Water Genesis 1 10.jpg", "michelangelo buonarroti", "genesis", 1, 10);

INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("The Creation of Eve", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Betram of Minden The Creation of Eve Genesis 2 21.jpg", "betram of minden", "genesis", 2, 21);

INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("Paradise", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Fra Angelico Paradise Genesis 2 25.jpg", "fra angelico", "genesis", 2, 25);

INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("Paradise", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Jan Brueghel the Elder Paradise Genesis 2 25.jpg", "jan brueghel the elder", "genesis", 2, 25);

INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("Paradise", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Lucas Cranach the Elder Paradise Genesis 2 25.jpg", "lucas cranach the elder", "genesis", 2, 25);

INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("Genesis", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Michelangelo Buonarroti Genesis 2 4.jpg", "michelangelo", "genesis", 2, 4);

INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("The Creation of Eve", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Lucas van Leyden The Creation of Eve Genesis 2 21.jpg", "lucas van leyden", "genesis", 2, 21);

INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("The Creation of Eve", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Michelangelo Buonarroti The Creation of Eve Genesis 2 21.jpg", "michelangelo", "genesis", 2, 21);

INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("Adam and Eve", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Albrecht Durer Adam and Even Genesis 3 6.jpg", "albrecht durer", "genesis", 3, 6);

INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("Adam and Eve Driven Out of Eden", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Gustave Dore Adam and Even Driven Out of Eden Genesis 3 24.jpg", "gustave dore", "genesis", 3, 24);

INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("Adam and Eve", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Hans Holbein the Younger Adam and Eve Genesis 3 12.jpg", "hans holbein", "genesis", 3, 12);

INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("Paradise and the Fall", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Jan Brueghel the Elder Paradise and the Fall Genesis 3 6.jpg", "jan brueghel the elder", "genesis", 3, 6);

INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("Adam and Eve 1526", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Lucas Cranach the Elder Adam and Eve 1526 Genesis 3 6.jpg", "lucas cranach the elder", "genesis", 3, 6);

INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("Adam and Eve", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Lucas Cranach the Elder Adam and Eve Genesis 3 6.jpg", "lucas cranach", "genesis", 3, 6);

INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("The Expulsion from Paradise", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Lucas van Leyden The Expulsion from Paradise Genesis 3 24.jpg", "lucas van leyden", "genesis", 3, 24);

INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("The Fall", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Lucas van Leyden The Fall Genesis 3 6.jpg", "lucas van leyden", "genesis", 3, 6);

INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("The Expulsion from Paradise", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Michelangelo Buonarroti The Expulsion from Paradise Genesis 3 24.jpg", "michelangelo", "genesis", 3, 24);

INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("The Fall", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Michelangelo Buonarroti The Fall Genesis 3 6.jpg", "michelangelo", "genesis", 3, 6);

INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("The Expulsion from Paradise", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Michiel Coxcie The Expulsion from Paradise Genesis 3 24.jpg", "michiel coxcie", "genesis", 3, 24);

INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("The Fall", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Michiel Coxcie The Fall Genesis 3 6.jpg", "michiel coxcie", "genesis", 3, 6);

INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("Cain and Abel Bring Offerings", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Betram of Minden Cain and Abel Bring Offerings Genesis 4 3.jpg", "betram of minden", "genesis", 4, 3);

INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("Cain and Abel", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Il Tintoretto Cain and Abel Genesis 4 8.jpg", "il tintoretto", "genesis", 4, 8);

INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("Cain Kills Abel", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Jan Lievens Cain Kills Abel Genesis 4 8.jpg", "jan lievens", "genesis", 4, 8);

INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("The Death of Abel", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Michiel Coxcie The Death of Abel Genesis 4 13.jpg", "michel coxcie", "genesis", 4, 13);

INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("The Lamenttion of Abel", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Pieter Lastman The Lamentation of Abel Genesis 4 13.jpg", "pieter lastman", "genesis", 4, 13);

INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("Cain and Abel", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Titian Cain and Abel Genesis 4 8.jpg", "titian", "genesis", 4, 8);

INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("Unknown", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/.jpg", "pinterest", "genesis", 5, 24);

INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("Genesis", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Betram of Minden Genesis 6 14.jpg", "betram of minden", "genesis", 6, 14);

INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("The Animals Board Noah's Ark", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Jan Brueghel the Elder The Animals Board Noah's Ark Genesis 7 9.jpg", "jan brueghel", "genesis", 7, 9);

INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("The Deluge", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/JMW Turner The Deluge Genesis 7 20.jpg", "jmw turner", "genesis", 7, 20);

INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("The Flood", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Johann Heinrich Schonfeld The Flood Genesis 7 20.jpg", "johann heinrich schonfeld", "genesis", 7, 20);

INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("The Flood", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Michelangelo Buonarroti The Flood Genesis 7 17.jpg", "michelangelo", "genesis", 7, 17);

INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("Genesis", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Michelangelo Buonarroti Genesis 8 20.jpg", "michelangeo", "genesis", 8, 20);

INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("Noah Curses Canaan", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Gustave Dore Noah Curses Canaan Genesis 9 25.jpg", "gustave dore", "genesis", 9, 25);

INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("Genesis", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Michelangelo Buonarroti Genesis 9 21.jpg", "michelangelo", "genesis", 9, 21);

INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("The Confusion of Tongues", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Gustave Dore The Confusion of Tongues Genesis 11 4.jpg", "gustave dore", "genesis", 11, 4);

INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("The Tower of Babel", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Pieter Bruegel the Elder The Tower of Babel Genesis 11 4.jpg", "pieter bruegel", "genesis", 11, 4);

INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("The Tower of Babel Vienna", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Pieter Bruegel the Elder The Tower of Babel Vienna Genesis 11 4.jpg", "pieter bruegel the elder", "genesis", 11, 4);

INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("Abraham on the Way to Canaan", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Pieter Lastman Abraham on the Way to Canaan Genesis 12 7.jpg", "pieter lastman", "genesis", 12, 7);

INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("Unknown", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Abraham and Lot Separate Ways.jpg", "unknown", "genesis", 13, 1);

INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("The Sacrifice of Melchizedek", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Giovan Battista Tiepolo The Sacrifice of Melchizedek Genesis 14 18.jpg", "giovan battista tiepolo", "genesis", 14, 18);

INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("Abraham Meets Melchizedek", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Peter Paul Rubens Abraham Meets Melchizedek Genesis 14 18.jpg", "peter paul rubens", "genesis", 14, 18);

INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("Genesis 15", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Gen 15 by Creative Commons Prayer.jpg", "creative commons prayer", "genesis", 15, 1);

INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("Abraham", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/abraham+copy.jpg", "unknown", "genesis", 16, 1);

INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("Genesis 16", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Peter Paul Rubens Genesis 16 6.jpg", "peter paul rubens", "genesis", 16, 6);

INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("Sarah, Abraham, and Hagar", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Sarah_Abraham_Hagar.jpg", "unknown", "genesis", 16, 1);

INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("Moses Leading the Israelites out of Egypt 1861", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Molnár_Moses_leading_the_Israelites_out_of_Egypt_1861.jpg", "molnar", "genesis", 17, 1);

INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("God and the Angels Visit Abraham", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Arent de Gelder God and the angels visit Abraham Genesis 18 10.jpg", "arent de gelder", "genesis", 18, 10);

INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("Genesis 18", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Gen 18 by Peter Hui.jpg", "peter hui", "genesis", 18, 1);

INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("The Angels Appear to Abraham", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Giovan Battista Tiepolo The Angels Appear to Abraham Genesis 18 2.jpg", "giovan battista", "genesis", 18, 2);

INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("Lot and Lot's Wife", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Lot and Lots Wife Genesis 18 or 19.jpg", "unknown", "genesis", 18, 1);

INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("Lot and Lot's Wife", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Lot and Lots Wife Genesis 18 or 19.jpg", "unknown", "genesis", 19, 1);

INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("Abraham and the Three Angels", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Lucas van Leyden Abraham and the Three Angels Genesis 18 2.jpg", "lucas van leyden", "genesis", 18, 2);

INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("Lot and his Family Flee from Sodom", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Albrecht Durer Lot and his family flee from Sodom Genesis 19 24.jpg", "albrecht durer", "genesis", 19, 24);

INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("Lot and His Daughters", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Artemisia Gentileschi Lot and His Daughters Genesis 19 32.jpg", "artemisia gentileschi", "genesis", 19, 32);

INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("Lot and his Daughters", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Il Guercino Lot and his Daughters Genesis 19 32.jpg", "il guercino", "genesis", 19, 32);

INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("Lot and his Daughters", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Lucas van Leyden Lot and His Daughters Genesis 19 32.jpg", "lucas van leyden", "genesis", 19, 32);

INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("Lot and His Daughters Print", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Lucas van Leyden Lot and HIs Daughters Print Genesis 19 32.jpg", "lucas van leyden", "genesis", 19, 32);

INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("Abimelech Restores Sarah", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/The_Phillip_Medhurst_Picture_Torah_106,_Abimelech_restores_Sarah._Genesis_cap_20_v_14._Caspar_Luyken.jpg", "caspar luyken", "genesis", 20, 14);

INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("Harard in the Desert", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Giovan Battista Tiepolo Hagard in the Desert Genesis 21 17.jpg", "giovan battista tiepolo", "genesis", 21, 17);

INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("The Angel Appears to Sarah", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Giovan Battista Tiepolo The Angel Appears to Sarah Genesis 21 1.jpg", "giovan battista tiepolo", "genesis", 21, 1);

INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("The Dismissal of Hagar", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Govert Flinck The Dismissal of Hagar Genesis 21 14.jpg", "govert flinck", "genesis", 21, 14);

INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("Abraham Casting out Hagar and Ishmael", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Il Guercino Abraham Casting out Hagar and Ishmael Genesis 21 14.jpg", "il guercino", "genesis", 21, 14);

INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("Abraham Casting out Hagar and Ishmael", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Pieter Lastman Abraham Casting Out Hagar and Ishmael Genesis 21 14.jpg", "pieter lastman", "genesis", 21, 14);

INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("The Sacrifice of Isaac 1605", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Caravaggio The Sacrifice of Isaac 1605 Genesis 22 10.jpg", "caravaggio", "genesis", 22, 10);

INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("The Sacrifice of Isaac", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Caravaggio The Sacrifice of Isaac Genesis 22 10.jpg", "caravaggio", "genesis", 22, 10);

INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("The Sacrifice of Isaac", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Giovan Battista Tiepolo The Sacrifice of Isaac Genesis 22 10.jpg", "giovan battista tiepolo", "genesis", 22, 10);

INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("Abraham and Isaac", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Jan Lievens Abraham and Isaac Genesis 22 15.jpg", "jan lievens", "genesis", 22, 15);

INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("Abraham and Isaac", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Rembrandt Abraham and Isaac Genesis 22 7.jpg", "rembrandt", "genesis", 22, 7);

INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("The Angel Prevents the Sacrifice of Isaac", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Rembrandt The Angel Prevents the Sacrifice of Isaac Genesis 22 10.jpg", "rembrandt", "genesis", 22, 10);

INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("Abraham and Isaac", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Titian Abraham and Isaac Genesis 22 10.jpg", "titian", "genesis", 22, 10);

INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("Isaac Meets Rebekah", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Arent de Gelder Isaac meets Rebekah Genesis 24 66.jpg", "arent de gelder", "genesis", 24, 66);

INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("Rebecca and Eliezer at the Well", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Ferdinand Bol Rebecca and Eliezer at the Well Genesis 24 18.jpg", "ferdinand bol", "genesis", 24, 18);

INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("Seeking and Finding", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Gen 24 Seeking and Finding.jpg", "unknown", "genesis", 24, 1);

INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("Rebecca and Eliezer at the Well", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Salomon de Bray Rebecca and Eliezer at the Well Genesis 24 18.jpg", "salomon de bray", "genesis", 24, 18);

INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("Isaac and Rebecca Spied Upon by Abimelech", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Raphael Isaac and Rebecca Spied Upon by Abimelech Genesis 26 8.jpg", "raphael", "genesis", 26, 8);

INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("The Jewish Bride", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Rembrandt The Jewish Bride Genesis 26 8.jpg", "rembrandt", "genesis", 26, 8);

INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("Isaac asks Esau to Hunt for Venison", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Betram of Minden Isaac asks Esau to Hunt for Venison Genesis 27 3.jpg", "betram of minden", "genesis", 27, 3);

INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("Isaac Blesses Jacob", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Govert Flinck Isaac Blesses Jacob Genesis 27 23.jpg", "govert flinck", "genesis", 27, 23);

INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("Isaac Blesses Jacob Ultrecht", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Govert Flinck Isaac Blesses Jacob Utrecht Genesis 27 23.jpg", "govert flinck", "genesis", 27, 23);

INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("Jacob's Dream", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Ferdinand Bol Jacob's Dream Genesis 28 12.jpg", "ferdinand bol", "genesis", 28, 12);

INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("Jacob's Dream", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Giovan Battista Tiepolo Jacob's Dream Genesis 28 12.jpg", "giovan battista tiepolo", "genesis", 28, 12);

INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("Jakob", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/dore-jakob-engel_grt  Gen 31 or 32.jpg", "gustave dore", "genesis", 31, 1);

INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("Jakob", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/dore-jakob-engel_grt  Gen 31 or 32.jpg", "gustave dore", "genesis", 32, 1);

INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("Rachel Hides Her Father's Idols", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Giovan Battista Tiepolo Rachel Hides Her Father's Idols Genesis 31 35.jpg", "giovan battista tiepolo", "genesis", 31, 35);

INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("Jacob Persuades Lean and Rachel to Flee", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Pieter Potter Jacob Persuades Leah and Rachel to Flee Genesis 31 5.jpg", "pieter potter", "genesis", 31, 5);

INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("Jacob Wrestling with the Angel", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Bartholomeus Breenbergh Jacob Wrestling with the Angel Genesis 32 24.jpg", "bartholomeus breenbergh", "genesis", 32, 24);

INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("Jacob Wrestling with the Angel", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Eugene Delacroix Jacob Wrestling with the angel Genesis 32 24.jpg", "eugene delacroix", "genesis", 32, 24);

INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("Genesis", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Gustave Dore Genesis 32 24.jpg", "gustave dore", "genesis", 32, 24);

INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("Vision after the Sermon", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Paul Gauguin Vision after the sermon Genesis 32 24.jpg", "paul gauguin", "genesis", 32, 24);

INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("Jacob Wrestling with the Angel", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Rembrandt Jacob Wrestling with the Angel Genesis 32 24.jpg", "rembrandt", "genesis", 32, 24);

INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("Joseph Tells his Dreams to Jacob", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Lucas van Leyden Joseph Tells His Dreams to Jacob Genesis 37 10.jpg", "lucas van leyden", "genesis", 37, 10);

INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("Judah and Tamar", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Arent de Gelder Judah and Tamar Genesis 38 16.jpg", "arent de gelder", "genesis", 38, 16);

INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("Judah and Tamar -", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Arent de Gelder Judan and Tamar Genesis 38 16.jpg", "arent de gelder", "genesis", 38, 16);

INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("Joseph Accused by Potiphar's Wife", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Rembrandt Joseph Accused by Potiphar's Wife Genesis 39 17.jpg", "rembrandt", "genesis", 39, 17);

INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("Joseph the Butler adn the Baker", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Alexander Ivanov Joseph the Butler and the Baker Genesis 40 8.jpg", "alexander ivanov", "genesis", 40, 8);

INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("Joseph the Butler and the Baker", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Benjamin Gerritsz Cuyp Joseph the Butler and the Baker Genesis 40 19.jpg", "benjamin gerritsz cuyp", "genesis", 40, 19);

INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("Pharaoh Gives His Ring to Joseph", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Giovan Battista Tiepolo Pharaoh Gives His Ring to Joseph Genesis 41 42.jpg", "giovan battista tiepolo", "genesis", 41, 42);

INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("Joseph before Pharaoh", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Lucas van Leyden Joseph before Pharaoh Genesis 41 25.jpg", "lucas van leyden", "genesis", 41, 25);

INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("Joseph Distributing Corn in Egypt", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Bartholomeus Breenbergh Joseph Distributing Corn in Egypt Genesis 42 6.jpg", "bartholomeus breenbergh", "genesis", 42, 6);

INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("Joseph and Judah with the Cup", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Arent de Gelder Joseph and Judah with the Cup Genesis 44 18.jpg", "arendt de gelder", "genesis", 44, 18);

INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("Judah and Joseph", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Arent de Gelder Judah and Joseph Genesis 44 18.jpg", "arendt de gelder", "genesis", 44, 18);

INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("Blessing the Children of Joseph", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Rembrandt Jacob Blessing the Children of Joseph Genesis 48 14.jpg", "rembrandt", "genesis", 48, 14);

INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("Cain Flees", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/William Blake Cain Flees.jpg", "william blake", "genesis", 4, 1);

INSERT INTO Artworks (title,picture,artist,book,chapter,verse) VALUES ("Joseph's  Brothers Find the Silver Goblet in Benjamin's Sack", "https://i2.wp.com/matthewwester.com/wp-content/uploads/BibleArtProject/Alexander Ivanov Joseph's Brothers Find the Silver Goblet in Benjamin's Sack Genesis 44 12.jpg", "alexander ivanov", "genesis", 44, 12);