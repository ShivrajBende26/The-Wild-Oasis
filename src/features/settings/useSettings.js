import { useQuery } from "@tanstack/react-query";
import { getsettings } from "../../services/apiSettings";

export function useSettings() {
  const {
    isLoading,
    error,
    data: settings,
  } = useQuery({
    queryKey: ["settings"],
    queryFn: getsettings,
  });

  return { isLoading, error, settings };
}
