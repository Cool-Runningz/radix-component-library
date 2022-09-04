
```js
const TABS = [
	{
    id: 'tab-1',
		label: "FREE",
		value: "free",
		content: <b>Accessible to everyone - $0 a month </b>
	},
	{
    id: 'tab-2',
		label: "TEAM",
		value: "team",
		content: <b>Monthly team sessions</b>
	},
	{
    id: 'tab-3',
		label: "PROFESSIONAL",
		value: "professional",
		content: <b>The Professional tier</b>
	},
	{
    id: 'tab-4',
		label: "ENTERPRISE",
		value: "enterprise",
		content: <b>The Enterprise tier</b>
	}
];
const [tabValue, setTabValue] = React.useState(TABS[0].value);
<>
<style dangerouslySetInnerHTML={{__html: `
  [data-preview="Tabs"]{ background-color: #b2b7e370; }
`}} />
<Tabs 
  tabsList={TABS}
  value={tabValue} 
  onValueChange={(val) => setTabValue(val)} 
   />
</>
```