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
    console.log('Time to sparkle');
  });

program.parse();