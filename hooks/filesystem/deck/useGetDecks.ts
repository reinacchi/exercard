import Database from "@tauri-apps/plugin-sql";

interface Card {
    deckId: number;
    front: string;
    back: string;
    hint?: string;
}

interface UseGetCardsResponse {
    status: 'success' | 'error';
    data?: Card[];
    message?: string;
}

const useGetCards = async (deckId: number): Promise<UseGetCardsResponse> => {
    try {
        const db = await Database.load("sqlite:decks.db");

        const result = await db.select(
            "SELECT * FROM cards WHERE deck_id = $1 ORDER BY due_date ASC",
            [deckId]
        );

        return {
            status: 'success',
            data: result as Card[],
        };
    } catch (err: unknown) {
        return {
            status: 'error',
            message: `Failed to fetch cards: ${(err as Error).message}`,
        };
    }
};

export default useGetCards;
