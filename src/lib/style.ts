export const dashToCamel = (dashed:string) => dashed && dashed.replace(/-([a-z])/g, g => (g[1].toUpperCase()));

// get any override styles assigned to an html element from user style sheets
export const getAssignedStyles = (element:HTMLElement) => {

  const x = [].slice.call(document.styleSheets || [])
    .map((sheet:any) => [].slice.call(sheet.rules || []))
    .reduce((accumulator:any,rule:any) => accumulator.concat(rule), [])
    .filter((rule:any) => (
      rule.selectorText &&
      (
        [...Array.from(new Set(
          element.className.split(/\s+/).map((className:string) => `.${className}`)
        ))].filter(x => new Set(
          rule.selectorText.split(/\s*,\s*/)
        ).has(x)).length > 0
      )
    ))
    .map((rule:any) => (
      [].slice.call(rule.style) || []).map(
        (property:string) => ({[dashToCamel(property)]: rule.style[property]})
      )
    )
    .reduce((accumulator:any,rule:any) => accumulator.concat(rule), [])
    .reduce(
      (accumulator:Object, property:Object) => (
        {
        ...accumulator,
        ...property
      }), {}
    );

  console.log("X",x);

  // break out element classnames
  const y = element.className.split(/\s+/).reduce(
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

  console.log("Y", y);
  return x;
}
