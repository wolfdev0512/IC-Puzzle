.PHONY: all
all: build

.PHONY: puzzle
.SILENT: puzzle
puzzle:
	$(eval puzzleCanisterID=$(shell dfx canister id puzzle))
	echo puzzleCanisterID = $(puzzleCanisterID)
	dfx deploy puzzle --argument="(principal \"$(puzzleCanisterID)\", record { \"supply\" = 100 : nat16; \"name\" = \"puzzle\"; })"
	# dfx deploy puzzle --argument="(
	#     principal $(puzzleCanisterID),
	#     record { \"supply\" = 100 : nat16; \"name\" = \"puzzle\"; }
	# )"
	$(eval puzzleCanisterID=$(shell dfx canister id puzzle))
	$(eval candidID=$(shell dfx canister id __Candid_UI))
	# Copy declarations into /declarations
	echo puzzleCanisterID = $(puzzleCanisterID)
	@echo "http://127.0.0.1:8000/?canisterId=$(candidID)&id=$(puzzleCanisterID)"


.PHONY: clean
.SILENT: clean
clean:
	rm -rf ./.dfx/
	rm -rf ./node_modules/
	rm -rf ./src/declarations/
