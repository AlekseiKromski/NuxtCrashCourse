import Vue from 'vue';
import Element from 'element-ui';
import locale from 'element-ui/lib/locale/lang/ru-RU'

//register filter
import DateFilter from "@/common/date.filter";
Vue.filter('date', DateFilter);

Vue.use(Element, {locale})
