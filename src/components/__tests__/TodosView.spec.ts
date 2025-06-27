import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TodosView from '../TodoListView.vue'

describe('TodosView - einfacher Test', () => {
  it('zeigt den grundlegenden Aufbau der Komponente', () => {
    const wrapper = mount(TodosView)

    // Überprüfe die wichtigsten Elemente
    expect(wrapper.text()).toContain('Meine Todos')

    // Suche spezifisch nach dem "Zeige Todos" Button
    const showButton = wrapper.findAll('button').find(btn =>
      btn.text().includes('Zeige Todos') ||
      btn.text().includes('Liste verbergen')
    )
    expect(showButton?.exists()).toBe(true)

    // Überprüfe das Eingabefeld
    expect(wrapper.find('input[placeholder="Titel*"]').exists()).toBe(true)


})
  // NEUE EINFACHE TESTS:

  it('hat ein Beschreibungs-Eingabefeld', () => {
    const wrapper = mount(TodosView)
    expect(wrapper.find('input[placeholder="Beschreibung"]').exists()).toBe(true)
  })


  it('hat korrekte Sortier-Optionen', () => {
    const wrapper = mount(TodosView)
    const sortOptions = wrapper.findAll('select')[1].findAll('option')
    expect(sortOptions.map(o => o.text())).toEqual(['Status', 'Alphabetisch'])
  })

  it('zeigt die Filter-Optionen korrekt an', () => {
    const wrapper = mount(TodosView)
    const options = wrapper.findAll('select')[0].findAll('option')
    expect(options.map(o => o.text())).toEqual(['Alle', 'Erledigt', 'Offen'])
  })


})
