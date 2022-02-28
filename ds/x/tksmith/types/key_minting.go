package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// MintingKeyPrefix is the prefix to retrieve all Minting
	MintingKeyPrefix = "Minting/value/"
)

// MintingKey returns the store key to retrieve a Minting from the index fields
func MintingKey(
	index string,
) []byte {
	var key []byte

	indexBytes := []byte(index)
	key = append(key, indexBytes...)
	key = append(key, []byte("/")...)

	return key
}
