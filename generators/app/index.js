var Generator = require("yeoman-generator");

class MyBase extends Generator {
  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  insertInFile(path, needle, strToInsert) {
    path = this.destinationPath(path);
    if (this.fs.exists(path)) {
      const file = this.fs.read(path);

      const newFile = file.replace(needle, strToInsert + needle);
      if (newFile == file) {
        this.log('cannot edit', path, '. Is', needle, 'present ?');
      } else {
        this.fs.write(path, newFile);
      }
    } else {
      this.log(path, 'does not exists');
    }
  }
}

module.exports = class extends MyBase {
  // The name `constructor` is important here
  constructor(args, opts) {
    // Calling the super constructor is important so our generator is correctly set up
    super(args, opts);

    // This makes `appname` a required argument.
    this.argument("entityName", { type: String, required: true });

    this.entityName = this.options.entityName;
    this.entityNameCapitalized = this.capitalizeFirstLetter(
      this.options.entityName
    );
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath("AddEntity.vue"),
      this.destinationPath(
        "src/components/Add" + this.entityNameCapitalized + ".vue"
      ),
      {
        entityNameCapitalized: this.entityNameCapitalized,
        entityName: this.entityName,
      }
    );

    this.fs.copyTpl(
      this.templatePath("EntityDetail.vue"),
      this.destinationPath(
        "src/components/" + this.entityNameCapitalized + "Detail.vue"
      ),
      {
        entityNameCapitalized: this.entityNameCapitalized,
        entityName: this.entityName,
      }
    );

    this.fs.copyTpl(
      this.templatePath("EntityItem.vue"),
      this.destinationPath(
        "src/components/" + this.entityNameCapitalized + "Item.vue"
      ),
      {
        entityNameCapitalized: this.entityNameCapitalized,
        entityName: this.entityName,
      }
    );

    this.fs.copyTpl(
      this.templatePath("EntityList.vue"),
      this.destinationPath(
        "src/components/" + this.entityNameCapitalized + "List.vue"
      ),
      {
        entityNameCapitalized: this.entityNameCapitalized,
        entityName: this.entityName,
      }
    );

    this.fs.copyTpl(
      this.templatePath("user-entities-db.js"),
      this.destinationPath(
        "src/firebase/user-" + this.entityName + "s" + "-db.js"
      ),
      {
        entityNameCapitalized: this.entityNameCapitalized,
        entityName: this.entityName,
      }
    );

    this.fs.copyTpl(
      this.templatePath("index.js"),
      this.destinationPath(
        "src/store/" + this.entityName + "s" + "/" + "index.js"
      ),
      {
        entityNameCapitalized: this.entityNameCapitalized,
        entityName: this.entityName,
      }
    );

    this.fs.copyTpl(
      this.templatePath("entities.actions.js"),
      this.destinationPath(
        "src/store/" +
          this.entityName +
          "s" +
          "/" +
          this.entityName +
          "s" +
          ".actions.js"
      ),
      {
        entityNameCapitalized: this.entityNameCapitalized,
        entityName: this.entityName,
      }
    );

    this.fs.copyTpl(
      this.templatePath("entities.getters.js"),
      this.destinationPath(
        "src/store/" +
          this.entityName +
          "s" +
          "/" +
          this.entityName +
          "s" +
          ".getters.js"
      ),
      {
        entityNameCapitalized: this.entityNameCapitalized,
        entityName: this.entityName,
      }
    );

    this.fs.copyTpl(
      this.templatePath("entities.mutations.js"),
      this.destinationPath(
        "src/store/" +
          this.entityName +
          "s" +
          "/" +
          this.entityName +
          "s" +
          ".mutations.js"
      ),
      {
        entityNameCapitalized: this.entityNameCapitalized,
        entityName: this.entityName,
      }
    );

    this.fs.copyTpl(
      this.templatePath("entities.state.js"),
      this.destinationPath(
        "src/store/" +
          this.entityName +
          "s" +
          "/" +
          this.entityName +
          "s" +
          ".state.js"
      ),
      {
        entityNameCapitalized: this.entityNameCapitalized,
        entityName: this.entityName,
      }
    );

    this.fs.copyTpl(
      this.templatePath("Entity.vue"),
      this.destinationPath(
        "src/views/" + this.entityNameCapitalized + ".vue"
      ),
      {
        entityNameCapitalized: this.entityNameCapitalized,
        entityName: this.entityName,
      }
    );

    this.fs.copyTpl(
      this.templatePath("Entities.vue"),
      this.destinationPath(
        "src/views/" + this.entityNameCapitalized + "s" + ".vue"
      ),
      {
        entityNameCapitalized: this.entityNameCapitalized,
        entityName: this.entityName,
      }
    );

    this.fs.copyTpl(
      this.templatePath("entities.actions.spec.js"),
      this.destinationPath(
        "tests/unit/store/" +
          this.entityName +
          "s" +
          "/" +
          this.entityName +
          "s" +
          ".actions.spec.js"
      ),
      {
        entityNameCapitalized: this.entityNameCapitalized,
        entityName: this.entityName,
      }
    );

    this.fs.copyTpl(
      this.templatePath("entities.getters.spec.js"),
      this.destinationPath(
        "tests/unit/store/" +
          this.entityName +
          "s" +
          "/" +
          this.entityName +
          "s" +
          ".getters.spec.js"
      ),
      {
        entityNameCapitalized: this.entityNameCapitalized,
        entityName: this.entityName,
      }
    );

    this.fs.copyTpl(
      this.templatePath("entities.mutations.spec.js"),
      this.destinationPath(
        "tests/unit/store/" +
          this.entityName +
          "s" +
          "/" +
          this.entityName +
          "s" +
          ".mutations.spec.js"
      ),
      {
        entityNameCapitalized: this.entityNameCapitalized,
        entityName: this.entityName,
      }
    );

    // Update existing files
    const needleHtml = '<!-- \/\/ bsentity needle \/\/ -->'; // => <!-- // bsentity needle // -->
    const needleJs = '\/\/ bsentity needle \/\/'; // => // bsentity needle //

    // NavBar
    this.insertInFile('src/components/NavBar.vue', needleHtml, '<div class=\"nav-item\">\r\n          <router-link to=\"\/'+ this.entityName + 's' +'\">'+ this.entityNameCapitalized + 's' +'<\/router-link>\r\n        <\/div>\r\n        ');

    // firestore rules
    this.insertInFile('src/firebase/firestore.rules', needleJs, 'match \/users\/{userId}\/'+ this.entityName + 's' +'\/{'+ this.entityName +'Id} {\r\n      allow get: if authenticated() && isOwner(userId);\r\n\t\t\tallow list: if authenticated() && isOwner(userId);\r\n      allow create: if authenticated() && isOwner(userId);\r\n      allow update, delete: if authenticated() && isOwner(userId);\r\n    }\r\n\r\n    ');

    // router index
    this.insertInFile('src/router/index.js', needleJs, '{\r\n      path: \'\/' + this.entityName + 's' + '\',\r\n      name: \'' + this.entityName + 's' + '\',\r\n      component: () =>\r\n        import(\/* webpackChunkName: \"client-chunk-' + this.entityName + 's' + '\" *\/ \'@\/views\/' + this.entityNameCapitalized + 's' + '.vue\')\r\n    },\r\n    {\r\n      path: \'\/' + this.entityName + 's' + '\/:id\',\r\n      name: \'' + this.entityName + '\',\r\n      props: true,\r\n      component: () =>\r\n        import(\/* webpackChunkName: \"client-chunk-' + this.entityName + '-details\" *\/ \'@\/views\/' + this.entityNameCapitalized + '.vue\')\r\n    },\r\n    ');

    // store index 1
    this.insertInFile('src/store/index.js', needleJs + ' 1', 'import ' + this.entityName + 's' + ' from \'.\/' + this.entityName + 's' + '\'\r\n');

    // store index 2
    this.insertInFile('src/store/index.js', needleJs + ' 2', this.entityName + 's' + ',\r\n    ');

    // authentication actions 1
    this.insertInFile('src/store/authentication/authentication.actions.js', needleJs + ' 1', 'dispatch(\'' + this.entityName + 's' + '\/getUser' + this.entityNameCapitalized + 's' + '\', null, { root: true })\r\n    ');

    // authentication actions 2
    this.insertInFile('src/store/authentication/authentication.actions.js', needleJs + ' 2', 'commit(\'' + this.entityName + 's' + '\/set' + this.entityNameCapitalized + 's' + '\', null, { root: true })\r\n    ');

    // tests authentication actions 1
    this.insertInFile('tests/unit/store/authentication/authentication.actions.spec.js', needleJs + ' 1', '\r\n    it(\'should get ' + this.entityName + 's' + ' for the user\', async () => {\r\n      mockUsersDbRead.mockResolvedValue(Promise.resolve(user))\r\n\r\n      await actions.login({ commit, dispatch }, firebaseUser)\r\n\r\n      expect(dispatch).toHaveBeenCalledWith(\'' + this.entityName + 's' + '\/getUser' + this.entityNameCapitalized + 's' + '\', null, {\r\n        root: true\r\n      })\r\n    })\r\n    ');

    // tests authentication actions 2
    this.insertInFile('tests/unit/store/authentication/authentication.actions.spec.js', needleJs + ' 2', '\r\n    it(\'should set ' + this.entityName + 's' + ' to null\', async () => {\r\n      await actions.logout({ commit, dispatch })\r\n\r\n      expect(commit).toHaveBeenCalledWith(\'' + this.entityName + 's' + '\/set' + this.entityNameCapitalized + 's' + '\', null, {\r\n        root: true\r\n      })\r\n    })\r\n    ');

  }
};
