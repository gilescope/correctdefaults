import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	const config = vscode.workspace.getConfiguration();
	const cfg = {
		"breadcrumbs.enabled": true,
		"css.validate": true,

		"editor.fontFamily": "Audiowide, Hasklig, Overpass Mono, monospace",
		"editor.fontLigatures": true,
		"editor.formatOnSave": true,
		"editor.formatOnSaveMode": "modifications",
		"editor.lineNumbers": "on",
		"editor.matchBrackets": "never",
		"editor.minimap.enabled": false,
		"editor.renderIndentGuides": false,
		"editor.rulers": [
			100
		],
		"editor.tabSize": 4,
		"editor.folding": false,
		"files.trimFinalNewlines": true,
		"gitlens.currentLine.enabled": false,
		"git.allowForcePush": true,
		"git.confirmForcePush": true,
		"telemetry.enableTelemetry": false,
		"terminal.integrated.scrollback": 50000,
		"workbench.settings.enableNaturalLanguageSearch": false,
		"workbench.startupEditor": "readme",
		"subtleBrackets.pairs": [{ "open": "(", "close": ")" }, { "open": "[", "close": "]" }, { "open": "{", "close": "}" }, { "open": "<", "close": ">" }],
		"cSpell.allowCompoundWords": true,
    		"diffEditor.wordWrap": "off",
		"editor.wordSeparators": " ()\"':,.;~@#$%^&{}[]`"
	};

	for (const [key, value] of Object.entries(cfg)) {
		const key_settings = config.inspect(key);
		if (key_settings?.globalValue === undefined) {
			config.update(key, value, vscode.ConfigurationTarget.Global);
		}
	}
}

// this method is called when your extension is deactivated
export function deactivate() { }
