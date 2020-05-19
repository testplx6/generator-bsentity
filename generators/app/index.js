var Generator = require('yeoman-generator');

class MyBase extends Generator {
  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
}

module.exports = class extends MyBase {
  // The name `constructor` is important here
  constructor(args, opts) {
    // Calling the super constructor is important so our generator is correctly set up
    super(args, opts);

    // This makes `appname` a required argument.
    this.argument("entityName", { type: String, required: true});

    this.entityName = this.options.entityName;
    this.entityNameCapitalized = this.capitalizeFirstLetter(this.options.entityName);
  }

  writing() {
      this.fs.copyTpl(
      this.templatePath('AddEntity.vue'),
      this.destinationPath('public/Add' + this.entityNameCapitalized + '.vue'),
      { entityNameCapitalized: this.entityNameCapitalized, entityName: this.entityName }
    );
  }
};