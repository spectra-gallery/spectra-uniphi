# spectra-uniphi


Spectra Uniphi acts as a meta repository tying together multiple submodules. The project is split into several components which live in their own repositories. After cloning this repository, run the command below to fetch the actual code for each submodule:


## Documentation
- [Interactive Map](docs/interactive-map.html)
### Serve docs locally

To preview the docs locally run:

```bash
npm install
npm start
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

This repository acts as a meta project for the **Uniphi Lab** ecosystem.  Each directory here is an empty folder that links to an external repository.  Running the submodule command will populate them with code.  For a high level view of how everything fits together see the [interactive repository map](docs/interactive-map.html).

## Repository structure

The following directories correspond to Git submodules:

- `exosystem/exosys-folg` – ecosystem modeling experiments.
- `afrhone/template` – UI prototyping templates from the `aligonde-ideo` repository.
- `spectra/infra` – infrastructure definitions for deployment.
- `spectra/ideotek` – smart‑contract logic.
- `spectra/graph` – social data graph implementation.
- `spectra/graph-api` – API service for the social graph.
- `spectra/afrhone` – application code for the Spectra project.
- `arquolab/delta` – sandbox models from the Arquolab team.

These submodules come from their respective GitHub repositories and are not included in this repository by default.

## Fetching submodules

After cloning this repository run the setup script to download all required code:

```bash
./setup.sh
```

The script simply executes `git submodule update --init --recursive` to populate each directory.


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

This will pull down each external project into its directory so that the entire tree builds correctly.

## Intended architecture

The Uniphi Lab stack combines several services.  A `spectra-playground-server` provides backend capabilities while a `spectra-frontend` offers a web interface.  Supporting projects such as `spectra-infra` and the social graph repositories provide the foundation.  Together they form the environment visualized in the interactive map.

## License

This project is licensed under the [MIT License](LICENSE).


## Local dashboard

A small dashboard application in `server/` visualizes the repository structure at runtime. It parses `.gitmodules` and renders an interactive graph using D3. Run the server with:

```bash
cd server && npm install
npm start
```

Then open `http://localhost:3000` to view a live map of all submodules.
