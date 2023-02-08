import { ref, onMounted, watch, toRefs } from "vue";
export const useFetchData = (props) => {
  const data = ref(null);
  const { fetch, id } = toRefs(props);
  onMounted(async () => {
    data.value = await fetch.value(id.value);
  });
  watch(id, async () => {
    data.value = await fetch.value(id.value);
  });
  return { data };
};
