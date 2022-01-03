# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
puts "Starting the seeding process..."
#Users
garrett = User.create(username: "Garrett", password: "Password123", dm_name: "Gorgindel")
matt = User.create(username: "Matt", password: "Help321", dm_name: "Swanklbottom")
kindred = User.create(username: "Kindred", password: "employed456", dm_name: "Redlawd")
#Campaigns
symgea = Campaign.create(name: "The World of Symgea", description: "A world divided by the abuse of political power. Heroes must confront both internal and external sources of evil and chaos to reunite the nations.", image: "https://s3.amazonaws.com/files.d20.io/images/140367082/minuOR36OrjCtZtV8lN55Q/max.jpg?1591130327689", status: "active", user_id: garrett.id)
flubbert = Campaign.create(name: "Flubbert's Dance", description: "Flubbert hasn't danced for many eons, but his next dance will bring the dawning of a new era. Can you reawaken Flubbert to save the world?", image: "https://e7.pngegg.com/pngimages/272/208/png-clipart-adventure-time-jake-illustration-jake-the-dog-roblox-finn-the-human-drawing-adventure-time-video-game-smiley.png", status: "active", user_id: matt.id)
disco = Campaign.create(name: "The Discord Disco", description: "You can dance if you want to. Or not. The choice is yours.", image: "https://franceslitman.com/wp-content/uploads/2019/04/disco-dance-party-1080x675.jpg", status: "active", user_id: kindred.id)
#Encounters
Enc.create(name: "Welcome to Krorth - Cave", description: "Players arrive on the docks, are escorted through the entry caverns. Assaulted by four bat like creatures.", image: "https://i.natgeofe.com/n/ee644d0a-5e25-4796-b2a5-99f57e4b1a2c/28849_16x9.jpg", notes: "Perception check, 10+ successfully see the creatures. Below, ambush round for bats.", status: "incomplete", campaign_id: symgea.id)
Enc.create(name: "Welcome to Krorth - Gate Guards", description: "Players, once exiting the cave, have to negotiate their way past the guards.", image: "https://securityintelligence.com/wp-content/uploads/2016/11/heavensopenornategates.j_362752.jpg", notes: "Persuation check below 5- straight to jail. Persuation 20+ they don't have to pay.", status: "incomplete", campaign_id: symgea.id )
Enc.create(name: "Flubbert's Omen", description: "A great jiggling and wiggling shakes the earth.", image: "https://secure.img1-fg.wfcdn.com/im/77177555/resize-h445%5Ecompr-r85/5682/56825324/44%2522+Cornstalk+Dracaena+Floor+Foliage+Plant+in+Planter.jpg", notes: "High priest will gather the players at the base of the chapel of wiggle.", status: "active", campaign_id: flubbert.id)
#Monsters
Monster.create(name: "Gelatinous Cube", description: "AC: 6, HP: 84, Speed: 15ft,
STR
14 (+2)
DEX
3 (-4)
CON
20 (+5)
INT
1 (-5)
WIS
6 (-2)
CHA
1 (-5)

Condition Immunities Blinded, Charmed, Deafened, Exhaustion, Frightened, Prone
Senses Blindsight 60 ft. (blind beyond this radius), Passive Perception 8

Languages --
Challenge 2 (450 XP)
Proficiency Bonus +2

Ooze Cube. The cube takes up its entire space. Other creatures can enter the space, but a creature that does so is subjected to the cube's Engulf and has disadvantage on the saving throw.

Creatures inside the cube can be seen but have total cover.

A creature within 5 feet of the cube can take an action to pull a creature or object out of the cube. Doing so requires a successful DC 12 Strength check, and the creature making the attempt takes 10 (3d6) acid damage.

The cube can hold only one Large creature or up to four Medium or smaller creatures inside it at a time.

Transparent. Even when the cube is in plain sight, it takes a successful DC 15 Wisdom (Perception) check to spot a cube that has neither moved nor attacked. A creature that tries to enter the cube's space while unaware of the cube is surprised by the cube.

Actions
Pseudopod. Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 10 (3d6) acid damage.

Engulf. The cube moves up to its speed. While doing so, it can enter Large or smaller creatures' spaces. Whenever the cube enters a creature's space, the creature must make a DC 12 Dexterity saving throw.

On a successful save, the creature can choose to be pushed 5 feet back or to the side of the cube. A creature that chooses not to be pushed suffers the consequences of a failed saving throw.

On a failed save, the cube enters the creature's space, and the creature takes 10 (3d6) acid damage and is engulfed. The engulfed creature can't breathe, is restrained, and takes 21 (6d6) acid damage at the start of each of the cube's turns. When the cube moves, the engulfed creature moves with it.

An engulfed creature can try to escape by taking an action to make a DC 12 Strength check. On a success, the creature escapes and enters a space of its choice within 5 feet of the cube.
", user_id: matt.id)
Monster.create(name: "Gelatinous Cube", description: "AC: 6, HP: 84, Speed: 15ft,
STR
14 (+2)
DEX
3 (-4)
CON
20 (+5)
INT
1 (-5)
WIS
6 (-2)
CHA
1 (-5)

Condition Immunities Blinded, Charmed, Deafened, Exhaustion, Frightened, Prone
Senses Blindsight 60 ft. (blind beyond this radius), Passive Perception 8

Languages --
Challenge 2 (450 XP)
Proficiency Bonus +2

Ooze Cube. The cube takes up its entire space. Other creatures can enter the space, but a creature that does so is subjected to the cube's Engulf and has disadvantage on the saving throw.

Creatures inside the cube can be seen but have total cover.

A creature within 5 feet of the cube can take an action to pull a creature or object out of the cube. Doing so requires a successful DC 12 Strength check, and the creature making the attempt takes 10 (3d6) acid damage.

The cube can hold only one Large creature or up to four Medium or smaller creatures inside it at a time.

Transparent. Even when the cube is in plain sight, it takes a successful DC 15 Wisdom (Perception) check to spot a cube that has neither moved nor attacked. A creature that tries to enter the cube's space while unaware of the cube is surprised by the cube.

Actions
Pseudopod. Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 10 (3d6) acid damage.

Engulf. The cube moves up to its speed. While doing so, it can enter Large or smaller creatures' spaces. Whenever the cube enters a creature's space, the creature must make a DC 12 Dexterity saving throw.

On a successful save, the creature can choose to be pushed 5 feet back or to the side of the cube. A creature that chooses not to be pushed suffers the consequences of a failed saving throw.

On a failed save, the cube enters the creature's space, and the creature takes 10 (3d6) acid damage and is engulfed. The engulfed creature can't breathe, is restrained, and takes 21 (6d6) acid damage at the start of each of the cube's turns. When the cube moves, the engulfed creature moves with it.

An engulfed creature can try to escape by taking an action to make a DC 12 Strength check. On a success, the creature escapes and enters a space of its choice within 5 feet of the cube.
", user_id: garrett.id)
Monster.create(name: "Gelatinous Cube", description: "AC: 6, HP: 84, Speed: 15ft,
STR
14 (+2)
DEX
3 (-4)
CON
20 (+5)
INT
1 (-5)
WIS
6 (-2)
CHA
1 (-5)

Condition Immunities Blinded, Charmed, Deafened, Exhaustion, Frightened, Prone
Senses Blindsight 60 ft. (blind beyond this radius), Passive Perception 8

Languages --
Challenge 2 (450 XP)
Proficiency Bonus +2

Ooze Cube. The cube takes up its entire space. Other creatures can enter the space, but a creature that does so is subjected to the cube's Engulf and has disadvantage on the saving throw.

Creatures inside the cube can be seen but have total cover.

A creature within 5 feet of the cube can take an action to pull a creature or object out of the cube. Doing so requires a successful DC 12 Strength check, and the creature making the attempt takes 10 (3d6) acid damage.

The cube can hold only one Large creature or up to four Medium or smaller creatures inside it at a time.

Transparent. Even when the cube is in plain sight, it takes a successful DC 15 Wisdom (Perception) check to spot a cube that has neither moved nor attacked. A creature that tries to enter the cube's space while unaware of the cube is surprised by the cube.

Actions
Pseudopod. Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 10 (3d6) acid damage.

Engulf. The cube moves up to its speed. While doing so, it can enter Large or smaller creatures' spaces. Whenever the cube enters a creature's space, the creature must make a DC 12 Dexterity saving throw.

On a successful save, the creature can choose to be pushed 5 feet back or to the side of the cube. A creature that chooses not to be pushed suffers the consequences of a failed saving throw.

On a failed save, the cube enters the creature's space, and the creature takes 10 (3d6) acid damage and is engulfed. The engulfed creature can't breathe, is restrained, and takes 21 (6d6) acid damage at the start of each of the cube's turns. When the cube moves, the engulfed creature moves with it.

An engulfed creature can try to escape by taking an action to make a DC 12 Strength check. On a success, the creature escapes and enters a space of its choice within 5 feet of the cube.
", user_id: kindred.id)
#Npcs
Npc.create(name: "Jake", description: "Magic Dog", image: "https://e7.pngegg.com/pngimages/272/208/png-clipart-adventure-time-jake-illustration-jake-the-dog-roblox-finn-the-human-drawing-adventure-time-video-game-smiley.png", user_id: matt.id)
Npc.create(name: "Jake", description: "Magic Dog", image: "https://e7.pngegg.com/pngimages/272/208/png-clipart-adventure-time-jake-illustration-jake-the-dog-roblox-finn-the-human-drawing-adventure-time-video-game-smiley.png", user_id: kindred.id)

#Locations
Location.create(name: "Nugwartz", description: "The wild wizarding school for western weed wackos.", image: "https://i.pinimg.com/originals/61/fe/1c/61fe1c17839cccbde137c803a5a3c78a.jpg", user_id: garrett.id)
Location.create(name: "Bob's Steakhouse", description: "Bob's best beef barbeque for you.", image: "https://bigseventravel.com/wp-content/uploads/2021/02/Screen-Shot-2021-02-17-at-6.45.04-PM-e1613573972132.png", user_id: kindred.id)
#Items
Item.create(name: "Dancing Boots", description: "Legendary/Wonderous - Stylish boots that increase CHA +3. Advantage on performance checks.", image: "https://i.pinimg.com/originals/12/79/c5/1279c519887d199d8878ff043cff2ca5.png", user_id: matt.id)
Item.create(name: "Lyre of Building", description: "This magical instrument is usually made of gold and inlaid with numerous gems. If the proper chords are struck, a single use of this lyre negates any attacks made against inanimate construction (walls, roof, floor, and so on) within 300 feet. This includes the effects of a horn of blasting, a disintegrate spell, or an attack from a ram or similar siege weapon. The lyre can be used in this way once per day, with the protection lasting for 30 minutes. The lyre is also useful with respect to building. Once a week, its strings can be strummed so as to produce chords that magically construct buildings, mines, tunnels, ditches, etc. The effect produced in 30 minutes of playing is equal to the work of 100 humans laboring for 3 days. Each hour after the first, a character playing the lyre must make a DC 18 Perform (string instruments) check. If it fails, she must stop and cannot play the lyre again for this purpose until a week has passed.", image: "https://db4sgowjqfwig.cloudfront.net/campaigns/88422/assets/774412/Lyre_of_Building.jpg?1504433543", user_id: garrett.id)
Item.create(name: "Moon Sickle", description: "Silver bladed sickle that gives a bonus to attack and damage rolls. Gain a bus to spell attack rolls.", image: "https://preview.redd.it/kbd2t0enjz871.png?width=640&crop=smart&auto=webp&s=ce6381f2bd73f3368292afeba13cccc1c37af820", user_id: kindred.id)
#Players
Player.create(name: "Bethany", description: "Goliath Rogue, Level- 14", image: "https://preview.redd.it/kbd2t0enjz871.png?width=640&crop=smart&auto=webp&s=ce6381f2bd73f3368292afeba13cccc1c37af820", user_id: matt.id)
Player.create(name: "Kriv", description: "Dragonborn Paladin, Oath of Vengeance, Level - 7", image: "https://149658804.v2.pressablecdn.com/wp-content/uploads/2021/07/image-1.png", user_id: garrett.id)

puts "Finished Seeding"

