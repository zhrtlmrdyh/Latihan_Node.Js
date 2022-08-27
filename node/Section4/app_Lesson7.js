const yargs = require("yargs");
const notes = require("./Lesson7");
yargs.version("1.1.0");

yargs.command({
  command: "remove",
  describe: "Removing a Note",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    notes.removeNote(argv.title);
  },
});
