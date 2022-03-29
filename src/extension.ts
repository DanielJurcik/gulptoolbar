// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { HelloWorldPanel } from './HelloWorldPanel';
import { SidebarProvider } from './SidebarProvider';
import * as cp from "child_process";

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	

	//Sidebar
	const sidebarProvider = new SidebarProvider(context.extensionUri);
	context.subscriptions.push(
		vscode.window.registerWebviewViewProvider("gulp-sidebar", sidebarProvider)
	);

	//Status bar item
	const statusItem = vscode.window.createStatusBarItem(
		vscode.StatusBarAlignment.Right
	  );
	  statusItem.text = "$(beaker) Gulp toolbar";
	  statusItem.command = "";
	  statusItem.show();

	HelloWorldPanel.createOrShow(context.extensionUri);
	
	const execShell = (cmd: string) =>
    new Promise<string>((resolve, reject) => {
        cp.exec(cmd, (err, out) => {
            if (err) {
                return reject(err);
            }
            return resolve(out);
        });
    });

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('gulptoolbar.helloWorld', async () => {
		// The code you place here will be executed every time your command is executed

		const currentDir = await execShell('ls');
		vscode.window.showInformationMessage(currentDir);

		HelloWorldPanel.createOrShow(context.extensionUri);

		const command = `node -e "console.log('hi!');"`;

		vscode.window.showInformationMessage(await execShell(command));
		//vscode.window.showInformationMessage(await execShell("git pull origin master"));
		

	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
