import { UseCoinActions, useCoinActions } from "../actions/coin.actions";

export const useActions = () => {
    const coins = useCoinActions()

    return {coins}
}

interface UseActions {
    coins: UseCoinActions
}

export type Actions = UseActions