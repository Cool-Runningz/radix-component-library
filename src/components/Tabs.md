
```js
const contentStyles = {
  height: "30rem"
};

const TABS = [
	{
    id: 'tab-1',
		label: "FREE",
		value: "free",
		content: <div style={contentStyles}>Accessible to everyone - $0 a month </div>
	},
	{
    id: 'tab-2',
		label: "TEAM",
		value: "team",
		content: <div style={contentStyles}>Monthly team sessions</div>
	},
	{
    id: 'tab-3',
		label: "PROFESSIONAL",
		value: "professional",
		content: <div style={contentStyles}>The Professional tier</div>
	},
	{
    id: 'tab-4',
		label: "ENTERPRISE",
		value: "enterprise",
		content: <div style={contentStyles}>Enterprise - Custom Pricing</div>
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