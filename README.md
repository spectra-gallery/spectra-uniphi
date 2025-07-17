# spectra-uniphi

Spectra Uniphi acts as a meta repository tying together multiple submodules. The project is split into several components which live in their own repositories. After cloning this repository, run the command below to fetch the actual code for each submodule:

```bash
git submodule update --init --recursive
```

## Project structure

- `afrhone/template` – template material from the Afrhone organization
- `arquolab/delta` – Delta models from Arquolab
- `exosystem/exosys-folg` – Exosystem definitions
- `spectra/afrhone` – Afrhone tooling for Spectra
- `spectra/graph` – social graph implementation
- `spectra/graph-api` – API layer for the graph
- `spectra/ideotek` – smart-contract infrastructure
- `spectra/infra` – infrastructure definitions and scripts

Each of the above paths is a Git submodule pointing to an external repository. Cloning this repository without initializing submodules results in these directories appearing empty. Running the command shown earlier populates them with their actual content.

## Intended architecture

The broader architecture centers around two services:

- **spectra-playground-server** – backend service used for experimentation and APIs.
- **spectra-frontend** – web front end communicating with the playground server.

Other submodules provide library code and infrastructure used by these two applications. Javascript is the primary language for the frontend and some server tooling.

