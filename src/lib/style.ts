export const dashToCamel = (dash:string) => dash.replace(/-([a-z])/g, g => (g[1].toUpperCase()));

// get any override styles assigned to an html element from user style sheets
export const getAssignedStyles = (element:HTMLElement) => {
  // break out element classnames
  return element.className.split(/\s+/).reduce(
    (accumulator:Object, className:string) => ({
      ...accumulator,
      ...(
        // get all of the stylesheets for the document
        [].slice.call(document.styleSheets || []).reduce(
          (accumulator:Object, sheet:any) => ({
            ...accumulator,
            ...(
              // get all of the rules for each stylesheet
              [].slice.call(sheet.rules || []).reduce(
                (accumulator:Object, rule:any) => ({
                  ...accumulator,
                  ...(
                    // split out the selectors for each rule
                    rule.selectorText && rule.selectorText.split(",").reduce(
                      (accumulator:Object, selector:string) => ({
                        ...accumulator,
                        ...(
                          // if the selector matches the classname, then...
                          selector === `.${className}` &&
                          // get the individual properties for each style
                          [].slice.call(rule.style).reduce(
                            (accumulator:Object, property:string) => ({
                                ...accumulator,
                                ...{[dashToCamel(property)]:rule.style[property]}
                              }
                            ), {}
                          )
                        )
                      }), {}
                    )
                  )
                }), {}
              )
            )
          }), {}
        )
      )
    }), {}
  );
}
