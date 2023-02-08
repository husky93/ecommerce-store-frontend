import { ref, watch } from "vue";
import { useRoute } from "vue-router";

export const useWatchParams = (props) => {
  const data = ref(null);
  const route = useRoute();
  watch(
    () => route.params.id,
    async () => {
      try {
        data.value = await props.fetch(route.params.id);
      } catch (error) {
        data.value = null;
      }
    },
    {
      immediate: true,
    }
  );
  return { data };
};
