export default class HSFullcalendarFilter {
  constructor(calendar) {
    this.calendar = calendar
    this.filters = {}
  }

  addFilter(filterName, filterFn) {
    this.filters[filterName] = this.filters[filterName] || filterFn
  }

  filter(filterName = null) {
    let events = this.calendar.getEvents()

    for (const key in this.getFilters(filterName)) {
      events = events.filter(event => HSFullcalendarFilter.hideEvent(event, this.filters[key]))
    }

    events.forEach(event => event.setProp('display', 'auto'))
  }

  getFilters(filterName) {
    return filterName
      ? {[filterName]: this.filters[filterName]}
      : this.filters
  }

  static hideEvent(event, func) {
    event.setProp('display', 'none')
    return func(event)
  }
}