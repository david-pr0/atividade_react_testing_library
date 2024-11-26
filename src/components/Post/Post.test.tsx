import { screen, render } from "@testing-library/react";
import Post from ".";

describe('Teste para Post', () => {
    it("O componente deve ser renderizado corretamente", () => {
        render(
            <Post imageUrl="https://via.placeholder.com/200x200">
                Teste
            </Post>
        )
        expect(screen.getByText('Teste')).toBeInTheDocument()
    })
})
