import React from 'react'
import PropTypes from "prop-types"
import "./Tabs.css"
import * as TabsPrimitive from "@radix-ui/react-tabs";

const Tabs = (props) => {
    return (
        <TabsPrimitive.Root
            className="rootTabs"
            value={props.value}
            onValueChange={props.onValueChange}
        >
            <TabsPrimitive.List className="listTabs">
                {props.tabsList.map((tab) => {
                    return (
                        <TabsPrimitive.Trigger className="triggerTabs"
                            key={tab.id || `${index}-${tab.value}`}
                            value={tab.value}
                        >
                            {tab.label}
                        </TabsPrimitive.Trigger>);
                })}
            </TabsPrimitive.List>
            {props.tabsList.map((tab) => {
                return (
                    <TabsPrimitive.Content className="contentTabs"
                        key={tab.id || `${index}-${tab.value}`}
                        value={tab.value}
                    >
                        {tab.content}
                    </TabsPrimitive.Content>
                );
            })}
        </TabsPrimitive.Root>
    )
}

export default Tabs

Tabs.propTypes = {
    tabsList: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            label: PropTypes.string.isRequired,
            content: PropTypes.element.isRequired,
            value: PropTypes.string.isRequired
        })
    ),
    /** The controlled value of the tab to activate. */
    value: PropTypes.string.isRequired,
    /** Event handler called when the value changes. */
    onValueChange: PropTypes.func.isRequired
}