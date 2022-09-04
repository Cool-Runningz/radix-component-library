```js
const [rangeValue, setRangeValue] = React.useState([50]);
<>
<style dangerouslySetInnerHTML={{__html: `
  [data-preview="RangeInput"]{ background-color: #b2b7e370; }
`}} />
   <RangeInput 
      label="Volume"
      value={rangeValue}        
      onValueChange={(val) => setRangeValue(val)}  
    />
</>
```