import Vue from 'vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faBreadSlice } from '@fortawesome/free-solid-svg-icons'
import { faDrumstickBite } from '@fortawesome/free-solid-svg-icons'
import { faFish } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faHamburger } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faBreadSlice)
library.add(faDrumstickBite)
library.add(faFish)
library.add(faPlus)
library.add(faHamburger)
library.add(faBars)
library.add(faArrowLeft)
library.add(faTrashAlt)

Vue.component('font-awesome-icon', FontAwesomeIcon)