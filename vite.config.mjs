import { defineConfig } from "vite";
import { resolve } from "path";
import { copyFileSync, mkdirSync, readdirSync } from "fs";

export default defineConfig({
    build: {
        minify: "terser",
        rollupOptions: {
            input: {
                index: resolve("index.html"),
                cadastro: resolve("cadastro.html"),
                projetos: resolve("projetos.html")
            }
        }
    },
    plugins: [
        {
            name: "copiar-javascript",
            closeBundle() {
                mkdirSync("dist/js", { recursive: true });

                const arquivos = readdirSync("js");

                arquivos.forEach((arquivo) => {
                    if (arquivo.endsWith(".js")) {
                        copyFileSync(
                            resolve("js", arquivo),
                            resolve("dist/js", arquivo)
                        );
                    }
                });
            }
        }
    ]
});
