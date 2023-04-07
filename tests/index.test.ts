import { describe, it, expect, vi, beforeEach } from "vitest"
import { mount, config } from "@vue/test-utils"
import App from "../app.vue"

import Index from "../pages/index.vue"
import { createVuetify } from "vuetify"
// import Child from "../components/child.vue"

//Create vuetify instance to be injected
const vuetify = createVuetify()

describe("app loads", () => {
  let Vuetify;
  beforeEach(()=>{
    config.global.plugins= [vuetify]
  })
  it('loads', () => {
    //Asser that the app loads
    let wrapper = mount(App)
    expect(wrapper.exists()).toBe(true)
  })

  it('button responds to clicks', async() => {
    //Mounts the Index Page 
    let wrapper = mount(Index)

    //Gets the v-btn
    const button = wrapper.find('[data-test="number"]')

    //gets the original number
    const og = wrapper.get('[data-test="number"]').text()
    expect(parseInt(og)).toEqual(0)

    //Trigger Click event on the button
    await wrapper.find('button').trigger("click")

    //Get Updated Number
    const newNumber = wrapper.get('[data-test="number"]')
    
    //Expect the updated number to be 1
    expect(parseInt(newNumber.text())).toEqual(1)

  })

})