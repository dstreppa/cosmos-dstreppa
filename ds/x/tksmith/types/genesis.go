package types

import (
	"fmt"
)

// DefaultIndex is the default capability global index
const DefaultIndex uint64 = 1

// DefaultGenesis returns the default Capability genesis state
func DefaultGenesis() *GenesisState {
	return &GenesisState{
		MintingList: []Minting{},
		BurningList: []Burning{},
		// this line is used by starport scaffolding # genesis/types/default
	}
}

// Validate performs basic genesis state validation returning an error upon any
// failure.
func (gs GenesisState) Validate() error {
	// Check for duplicated index in minting
	mintingIndexMap := make(map[string]struct{})

	for _, elem := range gs.MintingList {
		index := string(MintingKey(elem.Index))
		if _, ok := mintingIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for minting")
		}
		mintingIndexMap[index] = struct{}{}
	}
	// Check for duplicated index in burning
	burningIndexMap := make(map[string]struct{})

	for _, elem := range gs.BurningList {
		index := string(BurningKey(elem.Index))
		if _, ok := burningIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for burning")
		}
		burningIndexMap[index] = struct{}{}
	}
	// this line is used by starport scaffolding # genesis/types/validate

	return nil
}
