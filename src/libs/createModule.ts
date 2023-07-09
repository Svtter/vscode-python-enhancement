import * as vscode from "vscode";
import path = require("path");
import fs = require("fs");

export function createModule() {
  vscode.window.showInformationMessage("Creating new python module...");

  // create python module.
  const userInput = vscode.window.showInputBox({
    placeHolder: "Enter module name",
  });

  userInput.then((moduleName) => {
    if (moduleName === "") {
      // show error
      vscode.window.showErrorMessage("Module name is required.");
      return;
    }

    vscode.workspace.workspaceFolders?.forEach((folder) => {
      let modulePath = path.join(folder.uri.fsPath, moduleName!);

      try {
        fs.mkdirSync(modulePath);
        let moduleFile = path.join(modulePath, "__init__.py");
        fs.writeFileSync(moduleFile, "");
      } catch (error: any) {
        vscode.window.showErrorMessage(error.message);
        return;
      }
    });

    vscode.window.showInformationMessage(`Module: <${moduleName}> Created.`);
  });
}
