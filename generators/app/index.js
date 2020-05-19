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
      this.destinationPath('public/src/components/Add' + this.entityNameCapitalized + '.vue'),
      { entityNameCapitalized: this.entityNameCapitalized, entityName: this.entityName }
    );

      this.fs.copyTpl(
      this.templatePath('EntityDetail.vue'),
      this.destinationPath('public/src/components/' + this.entityNameCapitalized + 'Detail.vue'),
      { entityNameCapitalized: this.entityNameCapitalized, entityName: this.entityName }
    );

      this.fs.copyTpl(
      this.templatePath('EntityItem.vue'),
      this.destinationPath('public/src/components/' + this.entityNameCapitalized + 'Item.vue'),
      { entityNameCapitalized: this.entityNameCapitalized, entityName: this.entityName }
    );

      this.fs.copyTpl(
      this.templatePath('EntityList.vue'),
      this.destinationPath('public/src/components/' + this.entityNameCapitalized + 'List.vue'),
      { entityNameCapitalized: this.entityNameCapitalized, entityName: this.entityName }
    );

      this.fs.copyTpl(
      this.templatePath('user-entities-db.js'),
      this.destinationPath('public/src/firebase/user-' + this.entityName + 's' + '-db.js'),
      { entityNameCapitalized: this.entityNameCapitalized, entityName: this.entityName }
    );

      this.fs.copyTpl(
      this.templatePath('entities.actions.js'),
      this.destinationPath('public/src/store/' + this.entityName + 's' + '/' + this.entityName + 's' + '.actions.js'),
      { entityNameCapitalized: this.entityNameCapitalized, entityName: this.entityName }
    );
  }
};