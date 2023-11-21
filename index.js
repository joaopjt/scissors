const { Command } = require('commander');
const { name, version } = require('./package.json');
const parser_keys = require('./src/parser_keys.json');
const keys = require('./src/parser_keys_to_translation.json');

const { Bullseye } = require('bullseye');
const { Calendar } = require('calendar');
const { Camping } = require('camping');
const { ChristmasTree } = require('christmas-tree');
const { Compass } = require('compass');
const { Eagle } = require('eagle');
const { FireExtinguisher } = require('fire-extinguisher');
const { Flashlight } = require('flashlight');
const { GasStation } = require('gas-station');
const { Guitar } = require('guitar');
const { Joystick } = require('joystick');
const { Magnet } = require('magnet');
const { PepperSpray } = require('pepper-spray');
const { Placard } = require('placard');
const { Snowflake } = require('snowflake');
const { Sunflower } = require('sunflower');
const { Sunglasses } = require('sunglasses');
const { TaxiCab } = require('taxi-cab');
const { Telephone } = require('telephone');
const { Tennis } = require('tennis');
const { Tent } = require('tent');
const { Toolbox } = require('toolbox');
const { TrashCan } = require('trash-can');
const { Umbrella } = require('umbrella');
const { Watch } = require('watch');

const parser = {
  camping: (s) => { return new Camping(s).result },
  placard: (s) => { return new Placard(s).result },
  compass: (s) => { return new Compass(s).result },
  christmas_tree: (s) => { return new ChristmasTree(s).result },
  sunglasses: (s) => { return new Sunglasses(s).result },
  gas_station: (s) => { return new GasStation(s).result },
  pepper_spray: (s) => { return new PepperSpray(s).result },
  fire_extinguisher: (s) => { return new FireExtinguisher(s).result },
  umbrella: (s) => { return new Umbrella(s).result },
  eagle: (s) => { return new Eagle(s).result },
  snowflake: (s) => { return new Snowflake(s).result },
  sunflower: (s) => { return new Sunflower(s).result },
  watch: (s) => { return new Watch(s).result },
  tent: (s) => { return new Tent(s).result },
  taxi_cab: (s) => { return new TaxiCab(s).result },
  toolbox: (s) => { return new Toolbox(s).result },
  tennis: (s) => { return new Tennis(s).result },
  bullseye: (s) => { return new Bullseye(s).result },
  joystick: (s) => { return new Joystick(s).result },
  telephone: (s) => { return new Telephone(s).result },
  trash_can: (s) => { return new TrashCan(s).result },
  guitar: (s) => { return new Guitar(s).result },
  calendar: (s) => { return new Calendar(s).result },
  magnet: (s) => { return new Magnet(s).result },
  flashlight: (s) => { return new Flashlight(s).result }
};

const program = new Command();

program
  .name(name)
  .description('Go on charlie wonka.')
  .version(version);

program.command('parse')
  .description('Parse a string into common chemitry elements')
  .argument('<string>', 'string to parse')
  .option('-d, --debug', 'debug')
  .action((s, { debug }) => {
    let guitar = parser.guitar(s).map((r) => r.wide);
    let calendar = parser.calendar(s).map((r) => r.wide);
    let magnet = parser.magnet(s).map((r) => r.wide);
    let flashlight = parser.flashlight(s).map((r) => r.wide);

    console.log('-----------------------------------------------');
    console.log(`PARSE: ${s}`);
    console.log('-----------------------------------------------');
    console.log(`hydrogen: ${flashlight}`);
    console.log(`carbon: ${flashlight} - ${magnet} - ${calendar}`);
    console.log(`nitrogen: ${flashlight} - ${magnet}`);
    console.log(`oxygen: ${flashlight} - ${magnet} - ${calendar} - ${guitar}`);
    console.log('-----------------------------------------------');
    
  });

  program.command('diesel')
    .argument('<string>', 'string to get the diesel from')
    .action((s) => {
      let left_ch_ch2_ch3 = null;
      let left_ch_ch2 = null;
      let left_ch_ch3 = null;
      let left_ch = null;
      let left_hn = null;
      let middle_carbon_hc_left = null;
      let middle_carbon_ch_left = null;
      let middle_carbon_left = null;
      let middle_benzeno_carbon_left = {};
      let middle_benzeno_carbon = {};
      let middle_benzeno_carbon_right = {};
      let middle_carbon_right = null;
      let middle_carbon_ch_right = null;
      let middle_carbon_hc_right = null;
      let right_hn = null;
      let right_ch = null;
      let right_ch_ch3 = null;
      let right_ch_ch2 = null;
      let right_ch_ch2_ch3 = null;

      // helpers
      let hydrogen = null;

      let guitar = parser.guitar(s).map((r) => r.wide);
      let calendar = parser.calendar(s).map((r) => r.wide);
      let magnet = parser.magnet(s).map((r) => r.wide);
      let flashlight = parser.flashlight(s).map((r) => r.wide);

      let updateResults = (st) => {
        guitar = parser.guitar(st)[0].wide;
        calendar = parser.calendar(st)[0].wide;
        magnet = parser.magnet(st)[0].wide;
        flashlight = parser.flashlight(st)[0].wide;
      }

      ////////////////////
      // middle carbons //
      ////////////////////
      middle_carbon_left = { _carbon: 1, carbon: parser.tent(s)[0].wide }; 
      middle_carbon_right = { _carbon: 1, carbon: parser.tent(s)[0].wide };

      middle_carbon_hc_left = { 
        _hydrogen: 1,
        _carbon: 1,
        hydrogen: parser.sunglasses(s)[0].wide,
        carbon: parser[parser_keys[middle_carbon_left.carbon]](s)[0].wide
      };

      middle_carbon_ch_left = { 
        _carbon: 1,
        _hydrogen: 1,
        carbon: parser[parser_keys[middle_carbon_hc_left.carbon]](s)[0].wide,
        hydrogen: parser.sunglasses(s)[0].wide
      };

      middle_carbon_hc_right = { 
        _hydrogen: 1,
        _carbon: 1,
        hydrogen: parser.sunglasses(s)[0].wide,
        carbon: parser[parser_keys[middle_carbon_right.carbon]](s)[0].wide
      };

      middle_carbon_ch_right = { 
        _carbon: 1,
        _hydrogen: 1,
        carbon: parser[parser_keys[middle_carbon_hc_right.carbon]](s)[0].wide,
        hydrogen: parser.sunglasses(s)[0].wide
      };

      /////////////////////
      // benzeno carbons //
      /////////////////////
      middle_benzeno_carbon_left = { _carbon: 1, carbon: parser[parser_keys[middle_carbon_ch_left.carbon]](s)[0].wide };
      middle_benzeno_carbon = { _carbon: 1, carbon: parser[parser_keys[middle_carbon_hc_left.carbon]](s)[0].wide };
      middle_benzeno_carbon_right = { _carbon: 1, carbon: parser[parser_keys[middle_carbon_ch_right.carbon]](s)[0].wide };

      ////////////////////
      // left structure //
      ////////////////////
      left_hn = {
        _hydrogen: 1,
        _nitrogen: 1,
        hydrogen: parser.sunglasses(s)[0].wide,
        nitrogen: parser.placard(s)[0].wide
      };

      left_ch = {
        _carbon: 1,
        _hydrogen: 1,
        carbon: parser[parser_keys[middle_carbon_ch_left.carbon]](s)[0].wide,
        hydrogen: parser[parser_keys[left_hn.hydrogen]](s)[0].wide
      }

      ////////////////////
      // left ch group  //
      ////////////////////
      hydrogen = [parser.sunglasses(s)[0].wide];

      for (let i = 1; i <= 2; i++) {
        hydrogen.push(parser[parser_keys[hydrogen[hydrogen.length - 1]]](s)[0].wide);
      }

      left_ch_ch3 = {
        _carbon: 1,
        _hydrogen: 3,
        carbon: parser[parser_keys[left_ch.carbon]](s)[0].wide,
        hydrogen
      };

      hydrogen = [parser.sunglasses(s)[0].wide];
      hydrogen.push(parser[parser_keys[hydrogen[hydrogen.length - 1]]](s)[0].wide);

      left_ch_ch2 = {
        _carbon: 1,
        _hydrogen: 2,
        carbon: parser[parser_keys[left_ch.carbon]](s)[0].wide,
        hydrogen
      };

      left_ch_ch2_ch3 = {
        _carbon: 1,
        _hydrogen: 3,
        carbon: parser[parser_keys[left_ch.carbon]](s)[0].wide,
        hydrogen: [...hydrogen, parser[parser_keys[hydrogen[hydrogen.length - 1]]](s)[0].wide]
      };

      /////////////////////
      // right structure //
      /////////////////////
      right_hn = {
        _hydrogen: 1,
        _nitrogen: 1,
        hydrogen: parser.sunglasses(s)[0].wide,
        nitrogen: parser.placard(s)[0].wide
      };

      right_ch = {
        _carbon: 1,
        _hydrogen: 1,
        carbon: parser[parser_keys[middle_carbon_ch_right.carbon]](s)[0].wide,
        hydrogen: parser[parser_keys[right_hn.hydrogen]](s)[0].wide
      }

      ////////////////////
      // right ch group //
      ////////////////////
      hydrogen = [parser.sunglasses(s)[0].wide];

      for (let i = 1; i <= 2; i++) {
        hydrogen.push(parser[parser_keys[hydrogen[hydrogen.length - 1]]](s)[0].wide);
      }

      right_ch_ch3 = {
        _carbon: 1,
        _hydrogen: 3,
        carbon: parser[parser_keys[right_ch.carbon]](s)[0].wide,
        hydrogen
      };

      hydrogen = [parser.sunglasses(s)[0].wide];
      hydrogen.push(parser[parser_keys[hydrogen[hydrogen.length - 1]]](s)[0].wide);

      right_ch_ch2 = {
        _carbon: 1,
        _hydrogen: 2,
        carbon: parser[parser_keys[right_ch.carbon]](s)[0].wide,
        hydrogen
      };

      right_ch_ch2_ch3 = {
        _carbon: 1,
        _hydrogen: 3,
        carbon: parser[parser_keys[right_ch.carbon]](s)[0].wide,
        hydrogen: [...hydrogen, parser[parser_keys[hydrogen[hydrogen.length - 1]]](s)[0].wide]
      };

      console.log(left_ch_ch2_ch3);
      console.log(left_ch_ch2);
      console.log(left_ch_ch3);
      console.log(left_ch);
      console.log(left_hn);
      console.log(middle_carbon_hc_left);
      console.log(middle_carbon_ch_left);
      console.log(middle_carbon_left);
      console.log(middle_benzeno_carbon_left);
      console.log(middle_benzeno_carbon);
      console.log(middle_benzeno_carbon_right);
      console.log(middle_carbon_right);
      console.log(middle_carbon_ch_right);
      console.log(middle_carbon_hc_right);
      console.log(right_hn);
      console.log(right_ch);
      console.log(right_ch_ch3);
      console.log(right_ch_ch2);
      console.log(right_ch_ch2_ch3);
    });

  program.command('ethanol')
    .argument('<string>', 'string to get the ethanol from')
    .action((s) => {
      let result = [];
      let carbon = parser.tent(s)[0].wide;

      let guitar = parser.guitar(s).map((r) => r.wide);
      let calendar = parser.calendar(s).map((r) => r.wide);
      let magnet = parser.magnet(s).map((r) => r.wide);
      let flashlight = parser.flashlight(s).map((r) => r.wide);

      let updateResults = (st) => {
        guitar = parser.guitar(st)[0].wide;
        calendar = parser.calendar(st)[0].wide;
        magnet = parser.magnet(st)[0].wide;
        flashlight = parser.flashlight(st)[0].wide;
      }

      carbon = {
        _carbon: 2,
        carbon: [carbon, parser[parser_keys[carbon]](s)[0].wide]
      }

      let hydrogen = {
        _hydrogen: 5,
        hydrogen: [parser.sunglasses(s)[0].wide]
      };

      for (let i = 1; i <= 4; i++) {
        hydrogen.hydrogen.push(parser[parser_keys[hydrogen.hydrogen[hydrogen.hydrogen.length - 1]]](s)[0].wide);
      }

      let oxygen = {
        _oxygen: 1,
        oxygen: parser.trash_can(s)[0].wide
      };

      let oxygen_hydrogen = {
        _hydrogen: 1,
        hydrogen: parser.sunglasses(s)[0].wide
      };

      console.log(carbon);
      console.log(hydrogen);
      console.log(oxygen);
      console.log(oxygen_hydrogen);
      console.log(' ');
      updateResults(keys[carbon.carbon[0]]);
      console.log(`${ flashlight } - ${ magnet } - ${ calendar }`);
      updateResults(keys[carbon.carbon[1]]);
      console.log(`${ flashlight } - ${ magnet } - ${ calendar }`);
      updateResults(keys[hydrogen.hydrogen[0]]);
      console.log(`${ flashlight }`);
      updateResults(keys[hydrogen.hydrogen[1]]);
      console.log(`${ flashlight }`);
      updateResults(keys[hydrogen.hydrogen[2]]);
      console.log(`${ flashlight }`);
      updateResults(keys[hydrogen.hydrogen[3]]);
      console.log(`${ flashlight }`);
      updateResults(keys[hydrogen.hydrogen[4]]);
      console.log(`${ flashlight }`);
      updateResults(keys[oxygen.oxygen]);
      console.log(`${ flashlight } - ${ magnet } - ${ calendar } - ${ guitar }`);
    });

  program.command('nicotine')
    .argument('<string>', 'string to get the nicotine from')
    .action((s) => {
      let result = [];

      let guitar = parser.guitar(s).map((r) => r.wide);
      let calendar = parser.calendar(s).map((r) => r.wide);
      let magnet = parser.magnet(s).map((r) => r.wide);
      let flashlight = parser.flashlight(s).map((r) => r.wide);

      let updateResults = (st) => {
        guitar = parser.guitar(st)[0].wide;
        calendar = parser.calendar(st)[0].wide;
        magnet = parser.magnet(st)[0].wide;
        flashlight = parser.flashlight(st)[0].wide;
      }

      updateResults(s);
      console.log(`${ flashlight } - ${ magnet } - ${ calendar } - ${ guitar }`);
      console.log(` `);

      let nitrogen = {
        _nitrogen: 1,
        nitrogen: parser.placard(s)[0].wide
      }

      let hc_1_1 = {
        _hydrogen: 1,
        _carbon: 1,
        hydrogen: parser.sunglasses(s)[0].wide,
        carbon: parser.tent(s)[0].wide
      };

      let hc_1_2 = {
        _hydrogen: 1,
        _carbon: 1,
        hydrogen: parser[parser_keys[hc_1_1.hydrogen]](s)[0].wide,
        carbon: parser[parser_keys[hc_1_1.carbon]](s)[0].wide
      };

      let hc_1_3 = {
        _hydrogen: 1,
        _carbon: 1,
        hydrogen: parser[parser_keys[hc_1_2.hydrogen]](s)[0].wide,
        carbon: parser[parser_keys[hc_1_2.carbon]](s)[0].wide
      };

      let ch = {
        _carbon: 1,
        _hydrogen: 1,
        carbon: parser.tent(s)[0].wide,
        hydrogen: parser.sunglasses(s)[0].wide
      };

      let benzeno_1_carbon = {
        _carbon: 1,
        carbon: parser[parser_keys[ch.carbon]](s)[0].wide
      }

      let hc_2_1 = {
        _hydrogen: 1,
        _carbon: 1,
        hydrogen: parser.sunglasses(s)[0].wide,
        carbon: parser[parser_keys[benzeno_1_carbon.carbon]](s)[0].wide
      };

      let ch2_1 = {
        _carbon: 1,
        _hydrogen: 2,
        carbon: parser[parser_keys[hc_2_1.carbon]](s)[0].wide,
        hydrogen: [parser[parser_keys[hc_2_1.hydrogen]](s)[0].wide]
      }

      ch2_1.hydrogen.push(parser[parser_keys[ch2_1.hydrogen[0]]](s)[0].wide);

      let ch2_2 = {
        _carbon: 1,
        _hydrogen: 2,
        carbon: parser[parser_keys[ch2_1.carbon]](s)[0].wide,
        hydrogen: [parser[parser_keys[ch2_1.hydrogen[1]]](s)[0].wide]
      }

      ch2_2.hydrogen.push(parser[parser_keys[ch2_2.hydrogen[0]]](s)[0].wide);
      
      let ch2_3 = {
        _carbon: 1,
        _hydrogen: 2,
        carbon: parser[parser_keys[ch2_2.carbon]](s)[0].wide,
        hydrogen: [parser[parser_keys[ch2_2.hydrogen[0]]](s)[0].wide]
      }

      ch2_3.hydrogen.push(parser[parser_keys[ch2_3.hydrogen[0]]](s)[0].wide);

      let nitrogen_2 = {
        _nitrogen: 1,
        nitrogen: parser[parser_keys[hc_2_1.carbon]](s)[0].wide
      }

      let ch3 = {
        _carbon: 1,
        _hydrogen: 3,
        carbon: parser[parser_keys[hc_2_1.carbon]](s)[0].wide,
        hydrogen: [parser[parser_keys[hc_2_1.hydrogen]](s)[0].wide]
      }

      for (let i = 0; i < 2; i++) {
        ch3.hydrogen.push(parser[parser_keys[ch3.hydrogen[i]]](s)[0].wide);
      }

      console.log(nitrogen);
      updateResults(nitrogen.nitrogen);
      console.log(`${flashlight} - ${magnet}`);
      console.log(' ');
      console.log(hc_1_1);
      updateResults(hc_1_1.hydrogen);
      console.log(`${flashlight}`);
      updateResults(hc_1_1.carbon);
      console.log(`${flashlight} - ${magnet} - ${calendar}`);
      console.log(' ');
      console.log(hc_1_2);
      updateResults(hc_1_2.hydrogen);
      console.log(`${flashlight}`);
      updateResults(hc_1_2.carbon);
      console.log(`${flashlight} - ${magnet} - ${calendar}`);
      console.log(' ');
      console.log(hc_1_3);
      updateResults(hc_1_3.hydrogen);
      console.log(`${flashlight}`);
      updateResults(hc_1_3.carbon);
      console.log(`${flashlight} - ${magnet} - ${calendar}`);
      console.log(' ');
      console.log(ch);
      updateResults(ch.carbon);
      console.log(`${flashlight} - ${magnet} - ${calendar}`);
      updateResults(ch.hydrogen);
      console.log(`${flashlight}`);
      console.log(' ');
      console.log(benzeno_1_carbon);
      updateResults(benzeno_1_carbon.carbon);
      console.log(`${flashlight} - ${magnet} - ${calendar}`);
      console.log(' ');
      console.log(hc_2_1);
      updateResults(hc_2_1.hydrogen);
      console.log(`${flashlight}`);
      updateResults(hc_2_1.carbon);
      console.log(`${flashlight} - ${magnet} - ${calendar}`);
      console.log(' ');
      console.log(ch2_1);
      updateResults(ch2_1.carbon);
      console.log(`${flashlight} - ${magnet} - ${calendar}`);
      updateResults(ch2_1.hydrogen[0]);
      console.log(`${flashlight}`);
      updateResults(ch2_1.hydrogen[1]);
      console.log(`${flashlight}`);
      console.log(' ');
      console.log(ch2_2);
      updateResults(ch2_2.carbon);
      console.log(`${flashlight} - ${magnet} - ${calendar}`);
      updateResults(ch2_2.hydrogen[0]);
      console.log(`${flashlight}`);
      updateResults(ch2_2.hydrogen[1]);
      console.log(`${flashlight}`);
      console.log(' ');
      console.log(ch2_3);
      updateResults(ch2_3.carbon);
      console.log(`${flashlight} - ${magnet} - ${calendar}`);
      updateResults(ch2_3.hydrogen[0]);
      console.log(`${flashlight}`);
      updateResults(ch2_3.hydrogen[1]);
      console.log(`${flashlight}`);
      console.log(' ');
      console.log(nitrogen_2);
      updateResults(nitrogen_2.nitrogen);
      console.log(`${flashlight} - ${magnet}`);
      console.log(' ');
      console.log(ch3);
      updateResults(ch3.carbon);
      console.log(`${flashlight} - ${magnet} - ${calendar}`);
      updateResults(ch3.hydrogen[0]);
      console.log(`${flashlight}`);
      updateResults(ch3.hydrogen[1]);
      console.log(`${flashlight}`);
      updateResults(ch3.hydrogen[2]);
      console.log(`${flashlight}`);
    });
program.parse();