npm uninstall -g ember-cli
echo -- Remove old global ember-cli
npm cache clean 
echo -- Clear NPM cache
bower cache clean 
echo -- Clear Bower cache
npm install -g ember-cli@2.5.0 
echo -- Install new global ember-cli

rd /s /q node_modules bower_components dist tmp 
echo -- Delete temporary development folders.
npm install 
echo --save-dev ember-cli@2.5.0 
echo -- Update project's package.json to use latest version.
npm install 
echo -- Reinstall NPM dependencies.
bower install 
echo -- Reinstall bower dependencies.
ember init 
echo -- This runs the new project blueprint on your projects directory. Please follow the prompts, and review all changes (tip: you can see a diff by pressing d). The most common source of upgrade pain is missing changes in this step.