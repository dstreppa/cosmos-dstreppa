package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// SignalKeyPrefix is the prefix to retrieve all Signal
	SignalKeyPrefix = "Signal/value/"
)

// SignalKey returns the store key to retrieve a Signal from the index fields
func SignalKey(
	index string,
) []byte {
	var key []byte

	indexBytes := []byte(index)
	key = append(key, indexBytes...)
	key = append(key, []byte("/")...)

	return key
}
