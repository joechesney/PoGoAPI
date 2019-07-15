# PoGoAPI

The goals of this project:
1. An API with all Pokemon Go pokemon data
  a. My API will have these properties available for each pokemon:
    i. Attack, Defense, and Stamina stats
    ii. Maximum CP
    iii. Types (these can be parsed from the img type url)
    iv. Evolution Requirements
    v. Buddy Distance
    vi. Secondary charge move unlock cost
    vii. Moves, with types and damage, and LEGACY MOVES SPECIFIED
    viii. Resistances and Weaknesses
    ix. Alolan boolean
2. A manually usable script that will scrape data off of gamepress pogo site to insert it nito my database
  a. I could probably make this automatic by having it run once per day. 
  b. Since I will need to send one request per pokemon, I can time it to send one request per 5 seconds or something that won't look too suspicious to their servers. 
  c. I could also send a single request once per day to check that the total number of pokemon hasnt changed. if it has, then send a request for every pokemon again. 
  d. Could also just have it send a request for every single pokemon spaced out over several days, so it is constantly checking for updates, but only once per pokemon every few days
3. Ill need 3 regular tables: 
  a. Pokemon
    i. number
    ii. attack
    iii. defense
    iv. stamina
    v. maximum_cp
    vi. alolan boolean (alolan)
    vii. evo_candy_req
    viii. second_move_candy_req
    ix. second_move_stardust_req
    x. buddy_distance
    xi. NAME
  b. Moves
    i. name
    ii. damage
    iii. energy amount
  c. Types
  b. I'll need 2 join tables: 
    i. Between Pokemon and Types, with pokemon number, and type number 
    ii. Between Pokemon and Moves, with pokemon number, move number, and legacy boolean

It seems that alolan is only given in the url, so ill have to either keep a list of currently-released alolan forms or 
just send an extra request to each pokemon number, and if it doesnt have an element that says "page not found", then that means it exists i guess lol. 
Or figure out another way to keep track of them. 