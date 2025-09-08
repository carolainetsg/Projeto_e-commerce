import readlinesync = require("readline-sync");
import { colors } from "./src/util/Colors";

export function main() {

    let opcao: number;

    while (true) {

        console.log(colors.bg.black, colors.fg.yellow,
                    "*****************************************************");
        console.log("                                                     ");
        console.log("                Doceria Ca-Ana                       ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Cadastar Produtos                    ");
        console.log("            2 - Listar Todos os Produtos             ");
        console.log("            3 - Buscar o código do produto           ");
        console.log("            4 - Atualizar os Dados do Produto        ");
        console.log("            5 - Apagar o Produto                     ");
        console.log("            6 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ",colors.reset);

        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 6) {
            console.log(colors.fg.greenstrong, "\nDoceria Ca-Ana, produtos de qualidade!");
            sobre();
            console.log(colors.reset, "");
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log(colors.fg.whitestrong, 
                    "\n\nCadastar Produtos\n\n", colors.reset);
                
                keyPress()
                break;
            case 2:
                console.log(colors.fg.whitestrong, 
                    "\n\nListar Todos os Produtos\n\n", colors.reset);

                keyPress()
                break;
            case 3:
                console.log(colors.fg.whitestrong, 
                    "\n\nBuscar o Código do produto\n\n", colors.reset);

                keyPress()
                break;
            case 4:
                console.log(colors.fg.whitestrong, 
                    "\n\nAtualizar os Dados do Produto\n\n", colors.reset);

                keyPress()
                break;
            case 5:
                console.log(colors.fg.whitestrong, 
                    "\n\nApagar o Produto\n\n", colors.reset);

                keyPress()
                break;
            default:
                console.log(colors.fg.whitestrong, 
                    "\nOpção Inválida!\n", colors.reset);

                keyPress()
                break;
    }
}

}

/* Função com os dados da pessoa desenvolvedora */

export function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: Carolaine Gonçalves");
    console.log("Generation Brasil - carolaineg@genstudents.org");
    console.log("github.com/carolainetsg/Projeto_e-commerce");
    console.log("*****************************************************");
}
function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

main();