var Generator = require('yeoman-generator');

module.exports = class extends Generator {
  // The name `constructor` is important here
  constructor(args, opts) {
    // Calling the super constructor is important so our generator is correctly set up
    super(args, opts);

    // This makes `appname` a required argument.
    this.argument("appname", { type: String, required: true, default: "default app name" });

    // This makes `appid` a required argument.
    this.argument("appid", { type: String, default: "default id name" });

    // Next, add your custom code
    this.option('babel', { desc: "Specify babel way", type: String }); // This method adds support for a `--babel` flag
  }

  async prompting() {
    this.answers = await this.prompt([
      {
        type: "input",
        name: "name",
        message: "Your project name",
        // store: true,
        default: this.appname // Default to current folder name
      },
      {
        type: "confirm",
        name: "cool",
        message: "Would you like to enable the Cool feature?"
      }
    ]);
  }

  writing() {
    this.log("argument app name", this.options.appname);
    this.log("argument app id", this.options.appid);
    this.log("app name", this.answers.name, "cool feature", this.answers.cool); // user answer `cool` used
    this.log("babel", this.options.babel ? ".babel" : ".nobab");
    this.log("babel", this.options.babel);
  }

  method1() {
    this.log('method 1 just ran');
  }

  method2() {
    this.log('method 2 just ran');
  }
};